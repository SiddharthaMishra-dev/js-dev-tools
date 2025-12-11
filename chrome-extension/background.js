// chrome-extension/background.js

chrome.runtime.onInstalled.addListener(() => {
 // Create main parent menu
 chrome.contextMenus.create({
  id: 'save-image-parent',
  title: 'Save Image As...',
  contexts: ['image'],
 });

 // Create format submenu options
 const formats = ['PNG', 'JPEG', 'WEBP'];
 formats.forEach((format) => {
  chrome.contextMenus.create({
   id: `save-image-${format.toLowerCase()}`,
   parentId: 'save-image-parent',
   title: format,
   contexts: ['image'],
  });
 });

 // Create Base64 copy option
 chrome.contextMenus.create({
  id: 'copy-base64',
  title: 'Copy Base64 Data URI',
  contexts: ['image'],
 });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
 console.log('Context menu clicked:', info.menuItemId, 'Image URL:', info.srcUrl);

 if (info.menuItemId.startsWith('save-image-')) {
  const format = info.menuItemId.split('-')[2];
  const mimeType = `image/${format}`;
  const imageUrl = info.srcUrl;

  console.log(`Converting ${imageUrl} to ${format}`);

  try {
   const dataUrl = await convertImage(imageUrl, mimeType);
   console.log('Image converted successfully, downloading...');
   await downloadImage(dataUrl, `download.${format}`);
   console.log('Download initiated');
  } catch (error) {
   console.error('Conversion failed:', error);
  }
 } else if (info.menuItemId === 'copy-base64') {
  const imageUrl = info.srcUrl;
  console.log('Copying Base64 for:', imageUrl);

  try {
   // Convert to PNG for Base64 (most compatible)
   const dataUrl = await convertImage(imageUrl, 'image/png');
   console.log('Image converted to Base64, copying to clipboard...');

   // Copy to clipboard using the offscreen document
   await copyToClipboard(dataUrl);
   console.log('Base64 copied successfully');

   // Show notification that copy was successful
   chrome.notifications?.create({
    type: 'basic',
    iconUrl: 'icons/icon-48.png',
    title: 'DevTools Image Helper',
    message: 'Base64 data URI copied to clipboard!',
   });
  } catch (error) {
   console.error('Base64 copy failed:', error);

   // Show error notification
   chrome.notifications?.create({
    type: 'basic',
    iconUrl: 'icons/icon-48.png',
    title: 'DevTools Image Helper',
    message: 'Failed to copy Base64 data URI: ' + error.message,
   });
  }
 }
});

async function copyToClipboard(dataUrl) {
 console.log('Setting up offscreen document for clipboard...');
 // Ensure offscreen document is available
 await setupOffscreenDocument('offscreen.html');

 console.log('Sending COPY_TO_CLIPBOARD message to offscreen document...');
 // Send message to offscreen document to handle clipboard
 return new Promise((resolve, reject) => {
  chrome.runtime.sendMessage(
   {
    type: 'COPY_TO_CLIPBOARD',
    data: dataUrl,
   },
   (response) => {
    if (chrome.runtime.lastError) {
     console.error('Runtime error:', chrome.runtime.lastError);
     reject(new Error(chrome.runtime.lastError.message));
     return;
    }

    if (!response) {
     console.error('No response from offscreen document');
     reject(new Error('No response from offscreen document'));
     return;
    }

    if (response.error) {
     console.error('Offscreen document error:', response.error);
     reject(new Error(response.error));
    } else {
     console.log('Clipboard operation successful');
     resolve(response.success);
    }
   },
  );
 });
}

async function convertImage(imageUrl, targetMimeType) {
 console.log('Setting up offscreen document for conversion...');
 // Ensure offscreen document is open
 await setupOffscreenDocument('offscreen.html');

 console.log('Sending CONVERT_IMAGE message to offscreen document...');
 // Send message to offscreen document
 return new Promise((resolve, reject) => {
  chrome.runtime.sendMessage(
   {
    type: 'CONVERT_IMAGE',
    imageUrl,
    targetMimeType,
   },
   (response) => {
    if (chrome.runtime.lastError) {
     console.error('Runtime error:', chrome.runtime.lastError);
     reject(new Error(chrome.runtime.lastError.message));
     return;
    }

    if (!response) {
     console.error('No response from offscreen document');
     reject(new Error('No response from offscreen document'));
     return;
    }

    if (response.error) {
     console.error('Offscreen document error:', response.error);
     reject(new Error(response.error));
    } else {
     console.log('Image conversion successful');
     resolve(response.dataUrl);
    }
   },
  );
 });
}

async function downloadImage(dataUrl, filename) {
 return chrome.downloads.download({
  url: dataUrl,
  filename: filename,
 });
}

let creating; // A global promise to avoid concurrency issues
async function setupOffscreenDocument(path) {
 console.log('Setting up offscreen document:', path);
 // Check all windows controlled by the service worker to see if one
 // of them is the offscreen document with the given path
 const offscreenUrl = chrome.runtime.getURL(path);
 const existingContexts = await chrome.runtime.getContexts({
  contextTypes: ['OFFSCREEN_DOCUMENT'],
  documentUrls: [offscreenUrl],
 });

 if (existingContexts.length > 0) {
  console.log('Offscreen document already exists');
  return;
 }

 console.log('Creating new offscreen document...');
 // create offscreen document
 if (creating) {
  console.log('Already creating, waiting...');
  await creating;
 } else {
  creating = chrome.offscreen.createDocument({
   url: path,
   reasons: ['BLOBS', 'CLIPBOARD'],
   justification: 'To convert image formats and handle clipboard operations',
  });
  await creating;
  console.log('Offscreen document created successfully');
  creating = null;
 }
}
