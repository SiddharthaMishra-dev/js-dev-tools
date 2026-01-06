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

// SEO configurations for each
export const seoConfig = {
 home: {
  title: 'JS DevTools | Free Image Processing & Developer Utilities',
  description:
   'Free online developer tools. Convert images to Base64, compress files, change formats (PNG, JPEG, WebP, AVIF), crop images, and format JSON. 100% client-side processing.',
  keywords: 'developer tools, image converter, base64 encoder, image compressor, json formatter, png to jpeg, webp converter, online tools',
  canonical: '/',
  ogImage: '/og/home.png',
 },
 imageToBase64: {
  title: 'Image to Base64 Converter | JS DevTools',
  description:
   'Convert images to Base64 encoded strings instantly. Supports all image formats with drag and drop functionality. 100% client-side processing for complete privacy.',
  keywords: 'image to base64, base64 encoder, image encoder, convert image to base64, base64 converter, data uri generator',
  canonical: '/image-to-base64',
  ogImage: '/og/image-to-base64.png',
 },
 imageConverter: {
  title: 'Image Format Converter - PNG, JPEG, WebP, AVIF | JS DevTools',
  description:
   'Convert images between PNG, JPEG, WebP, and AVIF formats. Batch processing with individual or ZIP downloads. Free online image format converter.',
  keywords: 'image format converter, png to jpeg, jpeg to webp, webp to png, avif converter, batch image converter, online image converter',
  canonical: '/image-format-converter',
  ogImage: '/og/image-converter.png',
 },
 imageCompressor: {
  title: 'Image Compressor - Reduce File Size Online | JS DevTools',
  description:
   'Compress images with adjustable quality and dimension controls. Reduce file sizes while maintaining visual quality. Free online image compression tool.',
  keywords:
   'image compressor, compress images online, reduce image size, image optimization, jpg compressor, png compressor, image size reducer',
  canonical: '/image-compressor',
  ogImage: '/og/image-compressor.png',
 },
 imageCropper: {
  title: 'Image Cropper - Crop & Resize Images Online | JS DevTools',
  description:
   'Crop and resize images with precision controls. Interactive cropping with transform options for rotation and flipping. Free online image cropping tool.',
  keywords: 'image cropper, crop image online, resize image, image editor, rotate image, flip image, online image cropper',
  canonical: '/image-cropper',
  ogImage: '/og/image-cropper.png',
 },
 jsonFormatter: {
  title: 'JSON Formatter & Validator - Format, Minify, Convert | JS DevTools',
  description:
   'Format, minify, and validate JSON online. Syntax highlighting with bracket matching. Convert JSON to CSV. Free online JSON formatter and validator tool.',
  keywords:
   'json formatter, json validator, json beautifier, json minifier, json to csv, format json online, prettify json, json syntax highlighter',
  canonical: '/json-formatter',
  ogImage: '/og/json-formatter.png',
 },
};
