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

 return (
  <Helmet>
   <title>{title}</title>
   <meta name="title" content={title} />
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
  title: 'JS DevTools – Free Private Image Tools & JSON Formatter Online',
  description:
   'Free developer tools for image processing and JSON formatting. 100% client-side, no uploads, complete privacy. Instant Base64, compression, conversion & more.',
  keywords:
   'developer tools, image converter, base64 encoder, image compressor, json formatter, png to jpeg, webp converter, online tools, privacy, client-side, no upload',
  canonical: '/',
  ogImage: '/og/home.png',
 },
 imageToBase64: {
  title: 'Image to Base64 Converter – Free, Private & Instant | JS DevTools',
  description:
   'Convert any image to Base64 data URI instantly. No server uploads—processing happens in your browser. Free, fast, and 100% private. Supports all formats.',
  keywords:
   'image to base64, base64 encoder, image encoder, convert image to base64, base64 converter, data uri generator, private, no upload, client-side',
  canonical: '/image-to-base64',
  ogImage: '/og/image-to-base64.png',
 },
 imageConverter: {
  title: 'PNG to WebP Converter – Free JPEG, AVIF Conversion | JS DevTools',
  description:
   'Convert images between PNG, JPEG, WebP, and AVIF formats instantly. Batch conversion with ZIP download. Free, private, no uploads. Works offline.',
  keywords:
   'image format converter, png to jpeg, jpeg to webp, webp to png, avif converter, batch image converter, online image converter, private, no upload',
  canonical: '/image-format-converter',
  ogImage: '/og/image-converter.png',
 },
 imageCompressor: {
  title: 'Compress Images Online Free – No Upload, 100% Private | JS DevTools',
  description:
   'Compress PNG, JPEG, and WebP images without quality loss. Reduce file sizes up to 80%. 100% client-side—your images never leave your browser. Free forever.',
  keywords:
   'image compressor, compress images online, reduce image size, image optimization, jpg compressor, png compressor, image size reducer, private, no upload',
  canonical: '/image-compressor',
  ogImage: '/og/image-compressor.png',
 },
 imageCropper: {
  title: 'Crop Images Online Free – Resize, Rotate & Flip | JS DevTools',
  description:
   'Crop, resize, rotate, and flip images online for free. Precision controls with aspect ratio presets. No uploads, 100% private browser-based tool.',
  keywords:
   'image cropper, crop image online, resize image, image editor, rotate image, flip image, online image cropper, private, no upload, client-side',
  canonical: '/image-cropper',
  ogImage: '/og/image-cropper.png',
 },
 jsonFormatter: {
  title: 'JSON Formatter & Validator – Free Online Beautifier | JS DevTools',
  description:
   'Format, validate, and minify JSON online with syntax highlighting. Convert JSON to CSV. No data sent to servers—completely private. Free developer tool.',
  keywords:
   'json formatter, json validator, json beautifier, json minifier, json to csv, format json online, prettify json, json syntax highlighter, private, no upload',
  canonical: '/json-formatter',
  ogImage: '/og/json-formatter.png',
 },
 imageToPdf: {
  title: 'Images to PDF Converter – Free, Private & Secure | JS DevTools',
  description:
   'Convert multiple images to PDF document instantly. Rearrange pages, preview, and download. No uploads—100% private client-side processing.',
  keywords:
   'image to pdf, convert jpg to pdf, png to pdf, create pdf from images, combine images to pdf, private pdf converter, free online pdf tool, client-side',
  canonical: '/image-to-pdf',
  ogImage: '/og/image-to-pdf.png',
 },
};
