// chrome-extension/background.js

chrome.runtime.onInstalled.addListener(() => {
 chrome.contextMenus.create({
  id: 'save-image-parent',
  title: 'Save Image As...',
  contexts: ['image'],
 });

 const formats = ['PNG', 'JPEG', 'WEBP'];
 formats.forEach((format) => {
  chrome.contextMenus.create({
   id: `save-image-${format.toLowerCase()}`,
   parentId: 'save-image-parent',
   title: format,
   contexts: ['image'],
  });
 });
});

chrome.runtime.onInstalled.addListener(() => {
 chrome.contextMenus.create({
  id: 'copy-base-64',
  title: 'Copy Data URI',
  contexts: ['image'],
 });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
 if (info.menuItemId.startsWith('save-image-')) {
  const format = info.menuItemId.split('-')[2];
  const mimeType = `image/${format}`;
  const imageUrl = info.srcUrl;

  console.log(`Converting ${imageUrl} to ${format}`);

  try {
   const dataUrl = await convertImage(imageUrl, mimeType);
   await downloadImage(dataUrl, `download.${format}`);
  } catch (error) {
   console.error('Conversion failed:', error);
  }
 }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
 if (info.menuItemId === 'copy-base-64') {
  const imageUrl = info.srcUrl;

  try {
   const dataUrl = await convertImage(imageUrl, 'image/png');
   await copyToClipboard(dataUrl);
  } catch (error) {
   console.error('Conversion failed:', error);
  }
 }
});

async function copyToClipboard(dataUrl) {
 return navigator.clipboard.writeText(dataUrl);
}

async function convertImage(imageUrl, targetMimeType) {
 // Ensure offscreen document is open
 await setupOffscreenDocument('offscreen.html');

 // Send message to offscreen document
 const response = await chrome.runtime.sendMessage({
  type: 'CONVERT_IMAGE',
  imageUrl,
  targetMimeType,
 });

 if (response.error) {
  throw new Error(response.error);
 }

 return response.dataUrl;
}

async function downloadImage(dataUrl, filename) {
 return chrome.downloads.download({
  url: dataUrl,
  filename: filename,
 });
}

let creating; // A global promise to avoid concurrency issues
async function setupOffscreenDocument(path) {
 // Check all windows controlled by the service worker to see if one
 // of them is the offscreen document with the given path
 const offscreenUrl = chrome.runtime.getURL(path);
 const existingContexts = await chrome.runtime.getContexts({
  contextTypes: ['OFFSCREEN_DOCUMENT'],
  documentUrls: [offscreenUrl],
 });

 if (existingContexts.length > 0) {
  return;
 }

 // create offscreen document
 if (creating) {
  await creating;
 } else {
  creating = chrome.offscreen.createDocument({
   url: path,
   reasons: ['BLOBS'],
   justification: 'To convert image formats',
  });
  await creating;
  creating = null;
 }
}
