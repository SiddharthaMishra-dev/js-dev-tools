// chrome-extension/offscreen.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
 if (message.type === 'CONVERT_IMAGE') {
  convertImage(message.imageUrl, message.targetMimeType)
   .then((dataUrl) => sendResponse({ dataUrl }))
   .catch((error) => sendResponse({ error: error.message }));

  // Return true to indicate we wish to send a response asynchronously
  return true;
 }
});

async function convertImage(url, mimeType) {
 return new Promise((resolve, reject) => {
  const img = new Image();
  img.crossOrigin = 'anonymous'; // Critical for canvas export
  img.src = url;

  img.onload = () => {
   try {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataUrl = canvas.toDataURL(mimeType);
    resolve(dataUrl);
   } catch (err) {
    reject(err); // Likely a tainted canvas issue if CORS fails
   }
  };

  img.onerror = () => {
   reject(new Error('Failed to load image'));
  };
 });
}
