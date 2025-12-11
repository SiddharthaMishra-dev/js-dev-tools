console.log('Offscreen document loaded successfully');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
 console.log('Offscreen received message:', message.type, message);

 if (message.type === 'CONVERT_IMAGE') {
  console.log('Converting image:', message.imageUrl, 'to', message.targetMimeType);
  convertImage(message.imageUrl, message.targetMimeType)
   .then((dataUrl) => {
    console.log('Image conversion successful, dataUrl length:', dataUrl.length);
    sendResponse({ dataUrl });
   })
   .catch((error) => {
    console.error('Image conversion failed:', error);
    sendResponse({ error: error.message });
   });

  return true;
 } else if (message.type === 'COPY_TO_CLIPBOARD') {
  console.log('Copying to clipboard, data length:', message.data.length);
  copyToClipboard(message.data)
   .then(() => {
    console.log('Clipboard copy successful');
    sendResponse({ success: true });
   })
   .catch((error) => {
    console.error('Clipboard copy failed:', error);
    sendResponse({ error: error.message });
   });

  return true;
 }

 console.log('Unknown message type:', message.type);
});

async function copyToClipboard(text) {
 console.log('Attempting to copy to clipboard...');
 try {
  // Ensure we have a valid string
  if (typeof text !== 'string') {
   throw new Error('Clipboard data must be a string');
  }

  // Try to focus the window first
  try {
   window.focus();
   document.body.focus(); // Explicitly focus body
   await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay for focus
   await navigator.clipboard.writeText(text);
   console.log('Successfully copied to clipboard using Clipboard API');
   return true;
  } catch (clipboardError) {
   console.warn('Clipboard API failed, trying fallback method:', clipboardError.message);

   // Fallback method using textarea and document.execCommand
   return copyToClipboardFallback(text);
  }
 } catch (error) {
  console.error('Failed to copy to clipboard:', error);
  throw error;
 }
}

function copyToClipboardFallback(text) {
 console.log('Using fallback clipboard method...');
 return new Promise((resolve, reject) => {
  try {
   const textarea = document.createElement('textarea');
   textarea.value = text;
   textarea.style.position = 'fixed';
   textarea.style.top = '0';
   textarea.style.left = '0';
   textarea.style.width = '1px';
   textarea.style.height = '1px';
   textarea.style.opacity = '0';
   textarea.style.border = 'none';
   textarea.style.outline = 'none';
   textarea.style.boxShadow = 'none';
   textarea.style.boxShadow = 'none';
   textarea.style.background = 'transparent';

   // Ensure it's editable but read-only to prevent mobile keyboard flashing (optional, but good practice)
   textarea.setAttribute('readonly', '');
   textarea.contentEditable = 'true'; // Sometimes needed for focus

   document.body.appendChild(textarea);

   // Focus and select the text
   textarea.focus();
   textarea.select();
   textarea.setSelectionRange(0, textarea.value.length);

   // Try to copy using execCommand
   const successful = document.execCommand('copy');

   // Clean up
   document.body.removeChild(textarea);

   if (successful) {
    console.log('Successfully copied to clipboard using fallback method');
    resolve(true);
   } else {
    reject(new Error('Fallback copy method failed'));
   }
  } catch (error) {
   console.error('Fallback clipboard method failed:', error);
   reject(error);
  }
 });
}

async function convertImage(url, mimeType) {
 console.log('Starting image conversion for:', url, 'to', mimeType);

 try {
  // First, try to fetch the image to avoid CORS issues
  console.log('Fetching image data...');
  const response = await fetch(url);

  if (!response.ok) {
   throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const blob = await response.blob();
  console.log('Image fetched successfully, blob size:', blob.size);

  // Create object URL from blob
  const objectUrl = URL.createObjectURL(blob);

  try {
   const dataUrl = await convertBlobToCanvas(objectUrl, mimeType);
   return dataUrl;
  } finally {
   // Clean up object URL
   URL.revokeObjectURL(objectUrl);
  }
 } catch (fetchError) {
  console.warn('Fetch failed, trying direct image loading:', fetchError.message);

  // Fallback to direct image loading (may fail with CORS)
  return convertImageDirect(url, mimeType);
 }
}

async function convertBlobToCanvas(objectUrl, mimeType) {
 return new Promise((resolve, reject) => {
  const img = new Image();

  img.onload = () => {
   console.log('Image loaded from blob, creating canvas...');
   try {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    console.log('Canvas created:', canvas.width + 'x' + canvas.height);

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataUrl = canvas.toDataURL(mimeType);
    console.log('Canvas conversion successful, dataUrl length:', dataUrl.length);
    resolve(dataUrl);
   } catch (err) {
    console.error('Canvas conversion error:', err);
    reject(err);
   }
  };

  img.onerror = () => {
   console.error('Failed to load image from blob');
   reject(new Error('Failed to load image from blob'));
  };

  img.src = objectUrl;
 });
}

async function convertImageDirect(url, mimeType) {
 console.log('Attempting direct image loading (may fail with CORS)...');
 return new Promise((resolve, reject) => {
  const img = new Image();
  img.crossOrigin = 'anonymous';

  img.onload = () => {
   console.log('Image loaded directly, creating canvas...');
   try {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    console.log('Canvas created:', canvas.width + 'x' + canvas.height);

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataUrl = canvas.toDataURL(mimeType);
    console.log('Canvas conversion successful, dataUrl length:', dataUrl.length);
    resolve(dataUrl);
   } catch (err) {
    console.error('Canvas conversion error:', err);
    reject(err);
   }
  };

  img.onerror = () => {
   console.error('Failed to load image directly:', url);
   reject(new Error('Failed to load image: CORS policy may be blocking access'));
  };

  img.src = url;
 });
}
