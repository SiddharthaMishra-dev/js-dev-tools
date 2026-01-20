import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
 title: string;
 description: string;
 keywords: string;
 canonical: string;
 ogImage?: string;
}

const BASE_URL = 'https://js-devtools.sidme.dev';

export default function SEO({ title, description, keywords, canonical, ogImage = '/screenshot.png' }: SEOProps) {
 const fullCanonical = canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`;
 const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

 // Fallback for meta tags if react-helmet-async fails to render them (observed in some environments)
 useEffect(() => {
  const updateMeta = (name: string, content: string, isProperty = false) => {
   let meta = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`);
   if (!meta) {
    meta = document.createElement('meta');
    if (isProperty) meta.setAttribute('property', name);
    else meta.setAttribute('name', name);
    document.head.appendChild(meta);
   }
   meta.setAttribute('content', content);
  };

  updateMeta('description', description);
  updateMeta('keywords', keywords);
  updateMeta('og:title', title, true);
  updateMeta('og:description', description, true);
  updateMeta('og:image', fullOgImage, true);
  updateMeta('og:url', fullCanonical, true);
  updateMeta('twitter:title', title);
  updateMeta('twitter:description', description);
  updateMeta('twitter:image', fullOgImage);
 }, [title, description, keywords, fullCanonical, fullOgImage]);

 return (
  <Helmet>
   <title>{title}</title>
   <meta name="description" content={description} />
   <meta name="keywords" content={keywords} />
   <link rel="canonical" href={fullCanonical} />

   <meta property="og:type" content="website" />
   <meta property="og:url" content={fullCanonical} />
   <meta property="og:title" content={title} />
   <meta property="og:description" content={description} />
   <meta property="og:image" content={fullOgImage} />
   <meta property="og:site_name" content="JS DevTools" />
   <meta property="og:locale" content="en_US" />

   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:url" content={fullCanonical} />
   <meta name="twitter:title" content={title} />
   <meta name="twitter:description" content={description} />
   <meta name="twitter:image" content={fullOgImage} />
  </Helmet>
 );
}

// SEO configurations for each page - optimized for privacy-first messaging
export const seoConfig = {
 home: {
  title: 'JS DevTools – 100% Private Online Image Tools & JSON Formatter',
  description:
   'Free, private developer tools for image processing and JSON formatting. 100% client-side, no uploads, secure & fast. Convert, compress, crop, and format JSON instantly in your browser.',
  keywords:
   'free developer tools, online image tools, private image converter, json formatter online, base64 encoder, image compressor, client-side tools, no upload converter, web dev utilities, secure dev tools',
  canonical: '/',
  ogImage: '/og/home.png',
 },
 imageToBase64: {
  title: 'Free Image to Base64 Converter Online – 100% Private | JS DevTools',
  description:
   'Convert JPG, PNG, WebP, SVG to Base64 data URI instantly. 100% private client-side conversion. Your images never leave your browser. Fast, free, and secure for developers.',
  keywords:
   'image to base64, convert image to base64 online, base64 encoder, png to base64, jpg to base64, svg to base64, data uri generator, private base64 converter, client-side encoder',
  canonical: '/image-to-base64',
  ogImage: '/og/image-to-base64.png',
 },
 imageConverter: {
  title: 'Online Image Format Converter – Convert PNG, JPG, WebP, AVIF | JS DevTools',
  description:
   'Batch convert images between PNG, JPEG, WebP, and AVIF formats instantly. Download as ZIP. 100% client-side, private, no uploads. Fast & free browser-based tool.',
  keywords:
   'image format converter online, png to webp, jpg to png, webp to avif, batch image converter, private image converter, no upload conversion, browser based image tool',
  canonical: '/image-format-converter',
  ogImage: '/og/image-converter.png',
 },
 imageCompressor: {
  title: 'Free Online Image Compressor – 100% Private & No Quality Loss | JS DevTools',
  description:
   'Compress PNG, JPEG, and WebP images by up to 80% without quality loss. 100% client-side processing—secure and private. Optimize your images for the web instantly.',
  keywords:
   'image compressor online, reduce image size, compress png privately, compress jpeg no quality loss, webp optimizer, private image size reducer, client-side image compression',
  canonical: '/image-compressor',
  ogImage: '/og/image-compressor.png',
 },
 imageCropper: {
  title: 'Free Online Image Cropper – Crop, Rotate & Flip 100% Privately | JS DevTools',
  description:
   'Crop, resize, rotate, and flip images with precision. Choose from aspect ratio presets. No server uploads—100% private and secure browser-based image editor.',
  keywords:
   'image cropper online, crop images for free, online image editor, rotate image online, flip image privately, resize image browser, private photo cropper',
  canonical: '/image-cropper',
  ogImage: '/og/image-cropper.png',
 },
 jsonFormatter: {
  title: 'JSON Formatter, Validator & Beautifier – Free & 100% Private | JS DevTools',
  description:
   'Format, validate, and minify JSON with syntax highlighting. Convert JSON to CSV. 100% client-side, zero network calls. The most secure JSON tool for developers.',
  keywords:
   'json formatter online, json validator, beautify json, minify json, json to csv converter, secure json tool, private json formatter, developer utility',
  canonical: '/json-formatter',
  ogImage: '/og/json-formatter.png',
 },
 imageToPdf: {
  title: 'Free Image to PDF Converter Online – 100% Private | JS DevTools',
  description:
   'Convert JPG, PNG, WebP to PDF instantly. Rearrange pages with drag-and-drop. 100% client-side, secure & private—no uploads. Best free online PDF tool for developers.',
  keywords:
   'image to pdf, convert jpg to pdf, png to pdf, webp to pdf, convert image to pdf online, free image to pdf converter, private pdf converter, client-side image to pdf, batch image to pdf, reorder images to pdf, js devtools',
  canonical: '/image-to-pdf',
  ogImage: '/og/image-to-pdf.png',
 },
};
