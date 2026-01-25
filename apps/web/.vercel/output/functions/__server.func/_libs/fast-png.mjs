import { d as getAugmentedNamespace } from "../_chunks/_libs/react.mjs";
import { I as IOBuffer } from "./iobuffer.mjs";
import { I as Inflate_1, i as inflate_1, d as deflate_1 } from "./pako.mjs";
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) {
      c = 3988292384 ^ c >>> 1;
    } else {
      c = c >>> 1;
    }
  }
  crcTable[n] = c;
}
const initialCrc = 4294967295;
function updateCrc(currentCrc, data, length) {
  let c = currentCrc;
  for (let n = 0; n < length; n++) {
    c = crcTable[(c ^ data[n]) & 255] ^ c >>> 8;
  }
  return c;
}
function crc(data, length) {
  return (updateCrc(initialCrc, data, length) ^ initialCrc) >>> 0;
}
function checkCrc(buffer, crcLength, chunkName) {
  const expectedCrc = buffer.readUint32();
  const actualCrc = crc(new Uint8Array(buffer.buffer, buffer.byteOffset + buffer.offset - crcLength - 4, crcLength), crcLength);
  if (actualCrc !== expectedCrc) {
    throw new Error(`CRC mismatch for chunk ${chunkName}. Expected ${expectedCrc}, found ${actualCrc}`);
  }
}
function writeCrc(buffer, length) {
  buffer.writeUint32(crc(new Uint8Array(buffer.buffer, buffer.byteOffset + buffer.offset - length, length), length));
}
function unfilterNone(currentLine, newLine, bytesPerLine) {
  for (let i = 0; i < bytesPerLine; i++) {
    newLine[i] = currentLine[i];
  }
}
function unfilterSub(currentLine, newLine, bytesPerLine, bytesPerPixel) {
  let i = 0;
  for (; i < bytesPerPixel; i++) {
    newLine[i] = currentLine[i];
  }
  for (; i < bytesPerLine; i++) {
    newLine[i] = currentLine[i] + newLine[i - bytesPerPixel] & 255;
  }
}
function unfilterUp(currentLine, newLine, prevLine, bytesPerLine) {
  let i = 0;
  if (prevLine.length === 0) {
    for (; i < bytesPerLine; i++) {
      newLine[i] = currentLine[i];
    }
  } else {
    for (; i < bytesPerLine; i++) {
      newLine[i] = currentLine[i] + prevLine[i] & 255;
    }
  }
}
function unfilterAverage(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
  let i = 0;
  if (prevLine.length === 0) {
    for (; i < bytesPerPixel; i++) {
      newLine[i] = currentLine[i];
    }
    for (; i < bytesPerLine; i++) {
      newLine[i] = currentLine[i] + (newLine[i - bytesPerPixel] >> 1) & 255;
    }
  } else {
    for (; i < bytesPerPixel; i++) {
      newLine[i] = currentLine[i] + (prevLine[i] >> 1) & 255;
    }
    for (; i < bytesPerLine; i++) {
      newLine[i] = currentLine[i] + (newLine[i - bytesPerPixel] + prevLine[i] >> 1) & 255;
    }
  }
}
function unfilterPaeth(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
  let i = 0;
  if (prevLine.length === 0) {
    for (; i < bytesPerPixel; i++) {
      newLine[i] = currentLine[i];
    }
    for (; i < bytesPerLine; i++) {
      newLine[i] = currentLine[i] + newLine[i - bytesPerPixel] & 255;
    }
  } else {
    for (; i < bytesPerPixel; i++) {
      newLine[i] = currentLine[i] + prevLine[i] & 255;
    }
    for (; i < bytesPerLine; i++) {
      newLine[i] = currentLine[i] + paethPredictor(newLine[i - bytesPerPixel], prevLine[i], prevLine[i - bytesPerPixel]) & 255;
    }
  }
}
function paethPredictor(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc)
    return a;
  else if (pb <= pc)
    return b;
  else
    return c;
}
function applyUnfilter(filterType, currentLine, newLine, prevLine, passLineBytes, bytesPerPixel) {
  switch (filterType) {
    case 0:
      unfilterNone(currentLine, newLine, passLineBytes);
      break;
    case 1:
      unfilterSub(currentLine, newLine, passLineBytes, bytesPerPixel);
      break;
    case 2:
      unfilterUp(currentLine, newLine, prevLine, passLineBytes);
      break;
    case 3:
      unfilterAverage(currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
      break;
    case 4:
      unfilterPaeth(currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
      break;
    default:
      throw new Error(`Unsupported filter: ${filterType}`);
  }
}
const uint16$1 = new Uint16Array([255]);
const uint8$1 = new Uint8Array(uint16$1.buffer);
const osIsLittleEndian$1 = uint8$1[0] === 255;
function decodeInterlaceAdam7(params) {
  const { data, width, height, channels, depth } = params;
  const passes = [
    { x: 0, y: 0, xStep: 8, yStep: 8 },
    // Pass 1
    { x: 4, y: 0, xStep: 8, yStep: 8 },
    // Pass 2
    { x: 0, y: 4, xStep: 4, yStep: 8 },
    // Pass 3
    { x: 2, y: 0, xStep: 4, yStep: 4 },
    // Pass 4
    { x: 0, y: 2, xStep: 2, yStep: 4 },
    // Pass 5
    { x: 1, y: 0, xStep: 2, yStep: 2 },
    // Pass 6
    { x: 0, y: 1, xStep: 1, yStep: 2 }
    // Pass 7
  ];
  const bytesPerPixel = Math.ceil(depth / 8) * channels;
  const resultData = new Uint8Array(height * width * bytesPerPixel);
  let offset = 0;
  for (let passIndex = 0; passIndex < 7; passIndex++) {
    const pass = passes[passIndex];
    const passWidth = Math.ceil((width - pass.x) / pass.xStep);
    const passHeight = Math.ceil((height - pass.y) / pass.yStep);
    if (passWidth <= 0 || passHeight <= 0)
      continue;
    const passLineBytes = passWidth * bytesPerPixel;
    const prevLine = new Uint8Array(passLineBytes);
    for (let y = 0; y < passHeight; y++) {
      const filterType = data[offset++];
      const currentLine = data.subarray(offset, offset + passLineBytes);
      offset += passLineBytes;
      const newLine = new Uint8Array(passLineBytes);
      applyUnfilter(filterType, currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
      prevLine.set(newLine);
      for (let x = 0; x < passWidth; x++) {
        const outputX = pass.x + x * pass.xStep;
        const outputY = pass.y + y * pass.yStep;
        if (outputX >= width || outputY >= height)
          continue;
        for (let i = 0; i < bytesPerPixel; i++) {
          resultData[(outputY * width + outputX) * bytesPerPixel + i] = newLine[x * bytesPerPixel + i];
        }
      }
    }
  }
  if (depth === 16) {
    const uint16Data = new Uint16Array(resultData.buffer);
    if (osIsLittleEndian$1) {
      for (let k = 0; k < uint16Data.length; k++) {
        uint16Data[k] = swap16$1(uint16Data[k]);
      }
    }
    return uint16Data;
  } else {
    return resultData;
  }
}
function swap16$1(val) {
  return (val & 255) << 8 | val >> 8 & 255;
}
const uint16 = new Uint16Array([255]);
const uint8 = new Uint8Array(uint16.buffer);
const osIsLittleEndian = uint8[0] === 255;
const empty = new Uint8Array(0);
function decodeInterlaceNull(params) {
  const { data, width, height, channels, depth } = params;
  const bytesPerPixel = Math.ceil(depth / 8) * channels;
  const bytesPerLine = Math.ceil(depth / 8 * channels * width);
  const newData = new Uint8Array(height * bytesPerLine);
  let prevLine = empty;
  let offset = 0;
  let currentLine;
  let newLine;
  for (let i = 0; i < height; i++) {
    currentLine = data.subarray(offset + 1, offset + 1 + bytesPerLine);
    newLine = newData.subarray(i * bytesPerLine, (i + 1) * bytesPerLine);
    switch (data[offset]) {
      case 0:
        unfilterNone(currentLine, newLine, bytesPerLine);
        break;
      case 1:
        unfilterSub(currentLine, newLine, bytesPerLine, bytesPerPixel);
        break;
      case 2:
        unfilterUp(currentLine, newLine, prevLine, bytesPerLine);
        break;
      case 3:
        unfilterAverage(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
        break;
      case 4:
        unfilterPaeth(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
        break;
      default:
        throw new Error(`Unsupported filter: ${data[offset]}`);
    }
    prevLine = newLine;
    offset += bytesPerLine + 1;
  }
  if (depth === 16) {
    const uint16Data = new Uint16Array(newData.buffer);
    if (osIsLittleEndian) {
      for (let k = 0; k < uint16Data.length; k++) {
        uint16Data[k] = swap16(uint16Data[k]);
      }
    }
    return uint16Data;
  } else {
    return newData;
  }
}
function swap16(val) {
  return (val & 255) << 8 | val >> 8 & 255;
}
const pngSignature = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function writeSignature(buffer) {
  buffer.writeBytes(pngSignature);
}
function checkSignature(buffer) {
  if (!hasPngSignature(buffer.readBytes(pngSignature.length))) {
    throw new Error("wrong PNG signature");
  }
}
function hasPngSignature(array) {
  if (array.length < pngSignature.length) {
    return false;
  }
  for (let i = 0; i < pngSignature.length; i++) {
    if (array[i] !== pngSignature[i]) {
      return false;
    }
  }
  return true;
}
const textChunkName = "tEXt";
const NULL = 0;
const latin1Decoder = new TextDecoder("latin1");
function validateKeyword(keyword) {
  validateLatin1(keyword);
  if (keyword.length === 0 || keyword.length > 79) {
    throw new Error("keyword length must be between 1 and 79");
  }
}
const latin1Regex = /^[\u0000-\u00FF]*$/;
function validateLatin1(text) {
  if (!latin1Regex.test(text)) {
    throw new Error("invalid latin1 text");
  }
}
function decodetEXt(text, buffer, length) {
  const keyword = readKeyword(buffer);
  text[keyword] = readLatin1(buffer, length - keyword.length - 1);
}
function encodetEXt(buffer, keyword, text) {
  validateKeyword(keyword);
  validateLatin1(text);
  const length = keyword.length + 1 + text.length;
  buffer.writeUint32(length);
  buffer.writeChars(textChunkName);
  buffer.writeChars(keyword);
  buffer.writeByte(NULL);
  buffer.writeChars(text);
  writeCrc(buffer, length + 4);
}
function readKeyword(buffer) {
  buffer.mark();
  while (buffer.readByte() !== NULL) {
  }
  const end = buffer.offset;
  buffer.reset();
  const keyword = latin1Decoder.decode(buffer.readBytes(end - buffer.offset - 1));
  buffer.skip(1);
  validateKeyword(keyword);
  return keyword;
}
function readLatin1(buffer, length) {
  return latin1Decoder.decode(buffer.readBytes(length));
}
const ColorType = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
};
const CompressionMethod = {
  UNKNOWN: -1,
  DEFLATE: 0
};
const FilterMethod = {
  UNKNOWN: -1,
  ADAPTIVE: 0
};
const InterlaceMethod = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
};
const DisposeOpType = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
};
const BlendOpType = {
  SOURCE: 0,
  OVER: 1
};
class PngDecoder extends IOBuffer {
  _checkCrc;
  _inflator;
  _png;
  _apng;
  _end;
  _hasPalette;
  _palette;
  _hasTransparency;
  _transparency;
  _compressionMethod;
  _filterMethod;
  _interlaceMethod;
  _colorType;
  _isAnimated;
  _numberOfFrames;
  _numberOfPlays;
  _frames;
  _writingDataChunks;
  constructor(data, options = {}) {
    super(data);
    const { checkCrc: checkCrc2 = false } = options;
    this._checkCrc = checkCrc2;
    this._inflator = new Inflate_1();
    this._png = {
      width: -1,
      height: -1,
      channels: -1,
      data: new Uint8Array(0),
      depth: 1,
      text: {}
    };
    this._apng = {
      width: -1,
      height: -1,
      channels: -1,
      depth: 1,
      numberOfFrames: 1,
      numberOfPlays: 0,
      text: {},
      frames: []
    };
    this._end = false;
    this._hasPalette = false;
    this._palette = [];
    this._hasTransparency = false;
    this._transparency = new Uint16Array(0);
    this._compressionMethod = CompressionMethod.UNKNOWN;
    this._filterMethod = FilterMethod.UNKNOWN;
    this._interlaceMethod = InterlaceMethod.UNKNOWN;
    this._colorType = ColorType.UNKNOWN;
    this._isAnimated = false;
    this._numberOfFrames = 1;
    this._numberOfPlays = 0;
    this._frames = [];
    this._writingDataChunks = false;
    this.setBigEndian();
  }
  decode() {
    checkSignature(this);
    while (!this._end) {
      const length = this.readUint32();
      const type = this.readChars(4);
      this.decodeChunk(length, type);
    }
    this.decodeImage();
    return this._png;
  }
  decodeApng() {
    checkSignature(this);
    while (!this._end) {
      const length = this.readUint32();
      const type = this.readChars(4);
      this.decodeApngChunk(length, type);
    }
    this.decodeApngImage();
    return this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(length, type) {
    const offset = this.offset;
    switch (type) {
      // 11.2 Critical chunks
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(length);
        break;
      case "IDAT":
        this.decodeIDAT(length);
        break;
      case "IEND":
        this._end = true;
        break;
      // 11.3 Ancillary chunks
      case "tRNS":
        this.decodetRNS(length);
        break;
      case "iCCP":
        this.decodeiCCP(length);
        break;
      case textChunkName:
        decodetEXt(this._png.text, this, length);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(length);
        break;
    }
    if (this.offset - offset !== length) {
      throw new Error(`Length mismatch while decoding chunk ${type}`);
    }
    if (this._checkCrc) {
      checkCrc(this, length + 4, type);
    } else {
      this.skip(4);
    }
  }
  decodeApngChunk(length, type) {
    const offset = this.offset;
    if (type !== "fdAT" && type !== "IDAT" && this._writingDataChunks) {
      this.pushDataToFrame();
    }
    switch (type) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(length);
        break;
      default:
        this.decodeChunk(length, type);
        this.offset = offset + length;
        break;
    }
    if (this.offset - offset !== length) {
      throw new Error(`Length mismatch while decoding chunk ${type}`);
    }
    if (this._checkCrc) {
      checkCrc(this, length + 4, type);
    } else {
      this.skip(4);
    }
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const image = this._png;
    image.width = this.readUint32();
    image.height = this.readUint32();
    image.depth = checkBitDepth(this.readUint8());
    const colorType = this.readUint8();
    this._colorType = colorType;
    let channels;
    switch (colorType) {
      case ColorType.GREYSCALE:
        channels = 1;
        break;
      case ColorType.TRUECOLOUR:
        channels = 3;
        break;
      case ColorType.INDEXED_COLOUR:
        channels = 1;
        break;
      case ColorType.GREYSCALE_ALPHA:
        channels = 2;
        break;
      case ColorType.TRUECOLOUR_ALPHA:
        channels = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case ColorType.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${colorType}`);
    }
    this._png.channels = channels;
    this._compressionMethod = this.readUint8();
    if (this._compressionMethod !== CompressionMethod.DEFLATE) {
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    }
    this._filterMethod = this.readUint8();
    this._interlaceMethod = this.readUint8();
  }
  decodeACTL() {
    this._numberOfFrames = this.readUint32();
    this._numberOfPlays = this.readUint32();
    this._isAnimated = true;
  }
  decodeFCTL() {
    const image = {
      sequenceNumber: this.readUint32(),
      width: this.readUint32(),
      height: this.readUint32(),
      xOffset: this.readUint32(),
      yOffset: this.readUint32(),
      delayNumber: this.readUint16(),
      delayDenominator: this.readUint16(),
      disposeOp: this.readUint8(),
      blendOp: this.readUint8(),
      data: new Uint8Array(0)
    };
    this._frames.push(image);
  }
  // https://www.w3.org/TR/PNG/#11PLTE
  decodePLTE(length) {
    if (length % 3 !== 0) {
      throw new RangeError(`PLTE field length must be a multiple of 3. Got ${length}`);
    }
    const l = length / 3;
    this._hasPalette = true;
    const palette = [];
    this._palette = palette;
    for (let i = 0; i < l; i++) {
      palette.push([this.readUint8(), this.readUint8(), this.readUint8()]);
    }
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(length) {
    this._writingDataChunks = true;
    const dataLength = length;
    const dataOffset = this.offset + this.byteOffset;
    this._inflator.push(new Uint8Array(this.buffer, dataOffset, dataLength));
    if (this._inflator.err) {
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    }
    this.skip(length);
  }
  decodeFDAT(length) {
    this._writingDataChunks = true;
    let dataLength = length;
    let dataOffset = this.offset + this.byteOffset;
    dataOffset += 4;
    dataLength -= 4;
    this._inflator.push(new Uint8Array(this.buffer, dataOffset, dataLength));
    if (this._inflator.err) {
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    }
    this.skip(length);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(length) {
    switch (this._colorType) {
      case ColorType.GREYSCALE:
      case ColorType.TRUECOLOUR: {
        if (length % 2 !== 0) {
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${length}`);
        }
        if (length / 2 > this._png.width * this._png.height) {
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${length / 2} vs ${this._png.width * this._png.height})`);
        }
        this._hasTransparency = true;
        this._transparency = new Uint16Array(length / 2);
        for (let i = 0; i < length / 2; i++) {
          this._transparency[i] = this.readUint16();
        }
        break;
      }
      case ColorType.INDEXED_COLOUR: {
        if (length > this._palette.length) {
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${length} vs ${this._palette.length})`);
        }
        let i = 0;
        for (; i < length; i++) {
          const alpha = this.readByte();
          this._palette[i].push(alpha);
        }
        for (; i < this._palette.length; i++) {
          this._palette[i].push(255);
        }
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case ColorType.UNKNOWN:
      case ColorType.GREYSCALE_ALPHA:
      case ColorType.TRUECOLOUR_ALPHA:
      default: {
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
      }
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(length) {
    const name = readKeyword(this);
    const compressionMethod = this.readUint8();
    if (compressionMethod !== CompressionMethod.DEFLATE) {
      throw new Error(`Unsupported iCCP compression method: ${compressionMethod}`);
    }
    const compressedProfile = this.readBytes(length - name.length - 2);
    this._png.iccEmbeddedProfile = {
      name,
      profile: inflate_1(compressedProfile)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const ppuX = this.readUint32();
    const ppuY = this.readUint32();
    const unitSpecifier = this.readByte();
    this._png.resolution = { x: ppuX, y: ppuY, unit: unitSpecifier };
  }
  decodeApngImage() {
    this._apng.width = this._png.width;
    this._apng.height = this._png.height;
    this._apng.channels = this._png.channels;
    this._apng.depth = this._png.depth;
    this._apng.numberOfFrames = this._numberOfFrames;
    this._apng.numberOfPlays = this._numberOfPlays;
    this._apng.text = this._png.text;
    this._apng.resolution = this._png.resolution;
    for (let i = 0; i < this._numberOfFrames; i++) {
      const newFrame = {
        sequenceNumber: this._frames[i].sequenceNumber,
        delayNumber: this._frames[i].delayNumber,
        delayDenominator: this._frames[i].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      };
      const frame = this._frames.at(i);
      if (frame) {
        frame.data = decodeInterlaceNull({
          data: frame.data,
          width: frame.width,
          height: frame.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        });
        if (this._hasPalette) {
          this._apng.palette = this._palette;
        }
        if (this._hasTransparency) {
          this._apng.transparency = this._transparency;
        }
        if (i === 0 || frame.xOffset === 0 && frame.yOffset === 0 && frame.width === this._png.width && frame.height === this._png.height) {
          newFrame.data = frame.data;
        } else {
          const prevFrame = this._apng.frames.at(i - 1);
          this.disposeFrame(frame, prevFrame, newFrame);
          this.addFrameDataToCanvas(newFrame, frame);
        }
        this._apng.frames.push(newFrame);
      }
    }
    return this._apng;
  }
  disposeFrame(frame, prevFrame, imageFrame) {
    switch (frame.disposeOp) {
      case DisposeOpType.NONE:
        break;
      case DisposeOpType.BACKGROUND:
        for (let row = 0; row < this._png.height; row++) {
          for (let col = 0; col < this._png.width; col++) {
            const index = (row * frame.width + col) * this._png.channels;
            for (let channel = 0; channel < this._png.channels; channel++) {
              imageFrame.data[index + channel] = 0;
            }
          }
        }
        break;
      case DisposeOpType.PREVIOUS:
        imageFrame.data.set(prevFrame.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(imageFrame, frame) {
    const maxValue = 1 << this._png.depth;
    const calculatePixelIndices = (row, col) => {
      const index = ((row + frame.yOffset) * this._png.width + frame.xOffset + col) * this._png.channels;
      const frameIndex = (row * frame.width + col) * this._png.channels;
      return { index, frameIndex };
    };
    switch (frame.blendOp) {
      case BlendOpType.SOURCE:
        for (let row = 0; row < frame.height; row++) {
          for (let col = 0; col < frame.width; col++) {
            const { index, frameIndex } = calculatePixelIndices(row, col);
            for (let channel = 0; channel < this._png.channels; channel++) {
              imageFrame.data[index + channel] = frame.data[frameIndex + channel];
            }
          }
        }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case BlendOpType.OVER:
        for (let row = 0; row < frame.height; row++) {
          for (let col = 0; col < frame.width; col++) {
            const { index, frameIndex } = calculatePixelIndices(row, col);
            for (let channel = 0; channel < this._png.channels; channel++) {
              const sourceAlpha = frame.data[frameIndex + this._png.channels - 1] / maxValue;
              const foregroundValue = channel % (this._png.channels - 1) === 0 ? 1 : frame.data[frameIndex + channel];
              const value = Math.floor(sourceAlpha * foregroundValue + (1 - sourceAlpha) * imageFrame.data[index + channel]);
              imageFrame.data[index + channel] += value;
            }
          }
        }
        break;
      default:
        throw new Error("Unknown blendOp");
    }
  }
  decodeImage() {
    if (this._inflator.err) {
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    }
    const data = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
    if (this._filterMethod !== FilterMethod.ADAPTIVE) {
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    }
    if (this._interlaceMethod === InterlaceMethod.NO_INTERLACE) {
      this._png.data = decodeInterlaceNull({
        data,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    } else if (this._interlaceMethod === InterlaceMethod.ADAM7) {
      this._png.data = decodeInterlaceAdam7({
        data,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    } else {
      throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
    }
    if (this._hasPalette) {
      this._png.palette = this._palette;
    }
    if (this._hasTransparency) {
      this._png.transparency = this._transparency;
    }
  }
  pushDataToFrame() {
    const result = this._inflator.result;
    const lastFrame = this._frames.at(-1);
    if (lastFrame) {
      lastFrame.data = result;
    } else {
      this._frames.push({
        sequenceNumber: 0,
        width: this._png.width,
        height: this._png.height,
        xOffset: 0,
        yOffset: 0,
        delayNumber: 0,
        delayDenominator: 0,
        disposeOp: DisposeOpType.NONE,
        blendOp: BlendOpType.SOURCE,
        data: result
      });
    }
    this._inflator = new Inflate_1();
    this._writingDataChunks = false;
  }
}
function checkBitDepth(value) {
  if (value !== 1 && value !== 2 && value !== 4 && value !== 8 && value !== 16) {
    throw new Error(`invalid bit depth: ${value}`);
  }
  return value;
}
const defaultZlibOptions = {
  level: 3
};
class PngEncoder extends IOBuffer {
  _png;
  _zlibOptions;
  _colorType;
  _interlaceMethod;
  constructor(data, options = {}) {
    super();
    this._colorType = ColorType.UNKNOWN;
    this._zlibOptions = { ...defaultZlibOptions, ...options.zlib };
    this._png = this._checkData(data);
    this._interlaceMethod = (options.interlace === "Adam7" ? InterlaceMethod.ADAM7 : InterlaceMethod.NO_INTERLACE) ?? InterlaceMethod.NO_INTERLACE;
    this.setBigEndian();
  }
  encode() {
    writeSignature(this);
    this.encodeIHDR();
    if (this._png.palette) {
      this.encodePLTE();
      if (this._png.palette[0].length === 4) {
        this.encodeTRNS();
      }
    }
    this.encodeData();
    if (this._png.text) {
      for (const [keyword, text] of Object.entries(this._png.text)) {
        encodetEXt(this, keyword, text);
      }
    }
    this.encodeIEND();
    return this.toArray();
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  encodeIHDR() {
    this.writeUint32(13);
    this.writeChars("IHDR");
    this.writeUint32(this._png.width);
    this.writeUint32(this._png.height);
    this.writeByte(this._png.depth);
    this.writeByte(this._colorType);
    this.writeByte(CompressionMethod.DEFLATE);
    this.writeByte(FilterMethod.ADAPTIVE);
    this.writeByte(this._interlaceMethod);
    writeCrc(this, 17);
  }
  // https://www.w3.org/TR/PNG/#11IEND
  encodeIEND() {
    this.writeUint32(0);
    this.writeChars("IEND");
    writeCrc(this, 4);
  }
  encodePLTE() {
    const paletteLength = this._png.palette?.length * 3;
    this.writeUint32(paletteLength);
    this.writeChars("PLTE");
    for (const color of this._png.palette) {
      this.writeByte(color[0]);
      this.writeByte(color[1]);
      this.writeByte(color[2]);
    }
    writeCrc(this, 4 + paletteLength);
  }
  encodeTRNS() {
    const alpha = this._png.palette.filter((color) => {
      return color.at(-1) !== 255;
    });
    this.writeUint32(alpha.length);
    this.writeChars("tRNS");
    for (const el of alpha) {
      this.writeByte(el.at(-1));
    }
    writeCrc(this, 4 + alpha.length);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  encodeIDAT(data) {
    this.writeUint32(data.length);
    this.writeChars("IDAT");
    this.writeBytes(data);
    writeCrc(this, data.length + 4);
  }
  encodeData() {
    const { width, height, channels, depth, data } = this._png;
    const slotsPerLine = depth <= 8 ? Math.ceil(width * depth / 8) * channels : Math.ceil(width * depth / 8 * channels / 2);
    const newData = new IOBuffer().setBigEndian();
    let offset = 0;
    if (this._interlaceMethod === InterlaceMethod.NO_INTERLACE) {
      for (let i = 0; i < height; i++) {
        newData.writeByte(0);
        if (depth === 16) {
          offset = writeDataUint16(data, newData, slotsPerLine, offset);
        } else {
          offset = writeDataBytes(data, newData, slotsPerLine, offset);
        }
      }
    } else if (this._interlaceMethod === InterlaceMethod.ADAM7) {
      offset = writeDataInterlaced(this._png, data, newData, offset);
    }
    const buffer = newData.toArray();
    const compressed = deflate_1(buffer, this._zlibOptions);
    this.encodeIDAT(compressed);
  }
  _checkData(data) {
    const { colorType, channels, depth } = getColorType(data, data.palette);
    const png = {
      width: checkInteger(data.width, "width"),
      height: checkInteger(data.height, "height"),
      channels,
      data: data.data,
      depth,
      text: data.text,
      palette: data.palette
    };
    this._colorType = colorType;
    const expectedSize = depth < 8 ? Math.ceil(png.width * depth / 8) * png.height * channels : png.width * png.height * channels;
    if (png.data.length !== expectedSize) {
      throw new RangeError(`wrong data size. Found ${png.data.length}, expected ${expectedSize}`);
    }
    return png;
  }
}
function checkInteger(value, name) {
  if (Number.isInteger(value) && value > 0) {
    return value;
  }
  throw new TypeError(`${name} must be a positive integer`);
}
function getColorType(data, palette) {
  const { channels = 4, depth = 8 } = data;
  if (channels !== 4 && channels !== 3 && channels !== 2 && channels !== 1) {
    throw new RangeError(`unsupported number of channels: ${channels}`);
  }
  const returnValue = {
    channels,
    depth,
    colorType: ColorType.UNKNOWN
  };
  switch (channels) {
    case 4:
      returnValue.colorType = ColorType.TRUECOLOUR_ALPHA;
      break;
    case 3:
      returnValue.colorType = ColorType.TRUECOLOUR;
      break;
    case 1:
      if (palette) {
        returnValue.colorType = ColorType.INDEXED_COLOUR;
      } else {
        returnValue.colorType = ColorType.GREYSCALE;
      }
      break;
    case 2:
      returnValue.colorType = ColorType.GREYSCALE_ALPHA;
      break;
    default:
      throw new Error("unsupported number of channels");
  }
  return returnValue;
}
function writeDataBytes(data, newData, slotsPerLine, offset) {
  for (let j = 0; j < slotsPerLine; j++) {
    newData.writeByte(data[offset++]);
  }
  return offset;
}
function writeDataInterlaced(imageData, data, newData, offset) {
  const passes = [
    { x: 0, y: 0, xStep: 8, yStep: 8 },
    { x: 4, y: 0, xStep: 8, yStep: 8 },
    { x: 0, y: 4, xStep: 4, yStep: 8 },
    { x: 2, y: 0, xStep: 4, yStep: 4 },
    { x: 0, y: 2, xStep: 2, yStep: 4 },
    { x: 1, y: 0, xStep: 2, yStep: 2 },
    { x: 0, y: 1, xStep: 1, yStep: 2 }
  ];
  const { width, height, channels, depth } = imageData;
  let pixelSize = 0;
  if (depth === 16) {
    pixelSize = channels * depth / 8 / 2;
  } else {
    pixelSize = channels * depth / 8;
  }
  for (let passIndex = 0; passIndex < 7; passIndex++) {
    const pass = passes[passIndex];
    const passWidth = Math.floor((width - pass.x + pass.xStep - 1) / pass.xStep);
    const passHeight = Math.floor((height - pass.y + pass.yStep - 1) / pass.yStep);
    if (passWidth <= 0 || passHeight <= 0)
      continue;
    const passLineBytes = passWidth * pixelSize;
    for (let y = 0; y < passHeight; y++) {
      const imageY = pass.y + y * pass.yStep;
      const rawScanline = depth <= 8 ? new Uint8Array(passLineBytes) : new Uint16Array(passLineBytes);
      let rawOffset = 0;
      for (let x = 0; x < passWidth; x++) {
        const imageX = pass.x + x * pass.xStep;
        if (imageX < width && imageY < height) {
          const srcPos = (imageY * width + imageX) * pixelSize;
          for (let i = 0; i < pixelSize; i++) {
            rawScanline[rawOffset++] = data[srcPos + i];
          }
        }
      }
      newData.writeByte(0);
      if (depth === 8) {
        newData.writeBytes(rawScanline);
      } else if (depth === 16) {
        for (const value of rawScanline) {
          newData.writeByte(value >> 8 & 255);
          newData.writeByte(value & 255);
        }
      }
    }
  }
  return offset;
}
function writeDataUint16(data, newData, slotsPerLine, offset) {
  for (let j = 0; j < slotsPerLine; j++) {
    newData.writeUint16(data[offset++]);
  }
  return offset;
}
var ResolutionUnitSpecifier;
(function(ResolutionUnitSpecifier2) {
  ResolutionUnitSpecifier2[ResolutionUnitSpecifier2["UNKNOWN"] = 0] = "UNKNOWN";
  ResolutionUnitSpecifier2[ResolutionUnitSpecifier2["METRE"] = 1] = "METRE";
})(ResolutionUnitSpecifier || (ResolutionUnitSpecifier = {}));
function convertIndexedToRgb(decodedImage) {
  const palette = decodedImage.palette;
  const depth = decodedImage.depth;
  if (!palette) {
    throw new Error("Color palette is undefined.");
  }
  checkDataSize(decodedImage);
  const indexSize = decodedImage.width * decodedImage.height;
  const resSize = indexSize * palette[0].length;
  const res = new Uint8Array(resSize);
  let indexPos = 0;
  let offset = 0;
  const indexes = new Uint8Array(indexSize);
  let bit = 255;
  switch (depth) {
    case 1:
      bit = 128;
      break;
    case 2:
      bit = 192;
      break;
    case 4:
      bit = 240;
      break;
    case 8:
      bit = 255;
      break;
    default:
      throw new Error("Incorrect depth value");
  }
  for (const byte of decodedImage.data) {
    let bit2 = bit;
    let shift = 8;
    while (bit2) {
      shift -= depth;
      indexes[indexPos++] = (byte & bit2) >> shift;
      bit2 = bit2 >> depth;
      if (indexPos % decodedImage.width === 0) {
        break;
      }
    }
  }
  if (decodedImage.palette) {
    for (const index of indexes) {
      const color = decodedImage.palette.at(index);
      if (!color) {
        throw new Error("Incorrect index of palette color");
      }
      res.set(color, offset);
      offset += color.length;
    }
  }
  return res;
}
function checkDataSize(image) {
  const expectedSize = image.depth < 8 ? Math.ceil(image.width * image.depth / 8) * image.height * image.channels : image.width * image.height * image.channels;
  if (image.data.length !== expectedSize) {
    throw new RangeError(`wrong data size. Found ${image.data.length}, expected ${expectedSize}`);
  }
}
function decodePng(data, options) {
  const decoder = new PngDecoder(data, options);
  return decoder.decode();
}
function encodePng(png, options) {
  const encoder = new PngEncoder(png, options);
  return encoder.encode();
}
function decodeApng(data, options) {
  const decoder = new PngDecoder(data, options);
  return decoder.decodeApng();
}
const libEsm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get ResolutionUnitSpecifier() {
    return ResolutionUnitSpecifier;
  },
  convertIndexedToRgb,
  decode: decodePng,
  decodeApng,
  encode: encodePng,
  hasPngSignature
});
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(libEsm);
export {
  require$$1 as r
};
