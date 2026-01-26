<!-- Add Home page Screenshot -->

[![JS Dev Tools Screenshot](/apps/web/public/screenshot.png)](https://js-devtools.sidme.dev/)

Try it out: [https://js-devtools.sidme.dev/](https://js-devtools.sidme.dev/)

## JS Dev Tools

Combination of multiple small tools for JavaScript developers.

## Why This Project?

Tired of jumping between different websites for simple image tasks? Me too!

- Need to compress images? → CompressJPG
- Convert to Base64? → Base64 Guru
- Change formats? → Convertio
- Crop images? → iLoveIMG
- Format JSON? → JSON Formatter
- Convert images to PDF? → Image to PDF

So I built them ALL in one place!

## Features

### Image to Base64 Converter

- Drag & drop or click to upload
- Instant Base64 conversion with data URI
- One-click copy to clipboard
- File size display
- Supports all image formats

### Image Format Converter

- Convert between PNG, JPEG, WebP, AVIF
- Batch processing support
- Individual or bulk downloads
- Format preservation options
- Visual conversion progress

### Image Compressor

- Adjustable quality control (10%-100%)
- Custom dimension limits
- Format preservation or JPEG conversion
- Real-time compression ratio display
- Batch compression with progress tracking

### Image Cropper

- Crop and resize images with precision controls and transforms
- Aspect ratio locking
- Flip and rotate options
- Real-time preview
- Download cropped images in original format

### JSON Formatter

- Format, minify, and validate JSON online
- Syntax highlighting with bracket matching
- Convert JSON to CSV
- Real-time syntax highlighting
- Download formatted JSON

### Image to PDF

- Convert images to PDF format
- Multiple images support
- Downloadable PDF file

## Tech Stack

- React with TypeScript
- React Router DOM for routing
- Tailwind CSS for styling
- RsBuild as the build tool

## Project Structure

- `src/routes/ImageConverter.tsx`: Image format conversion component.
- `src/routes/ImageCompressor.tsx`: Image compression component.
- `src/routes/ImageCropper.tsx`: Image cropping component.
- `src/routes/JsonFormatter.tsx`: JSON formatting component.
- `src/routes/ImageToBase64.tsx`: Image to Base64 conversion component.
- `src/routes/ImageToPdf.tsx`: Image to PDF conversion component.
- `src/components`: Reusable UI components.
- `public`: Static assets.

## How to Install Chrome Extension Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/SiddharthaMishra-dev/js-dev-tools
    cd js-dev-tools
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top right)
   - Click "Load unpacked" and select the `chrome-extension` folder in the project directory
5. The extension should now be loaded and ready to use!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug
fixes.

- Report Bugs
- Suggest Features
- Submit Pull Requests
- Star the Repository if you find it useful!
