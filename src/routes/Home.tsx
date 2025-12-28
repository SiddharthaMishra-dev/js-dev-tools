import {
 IconBolt,
 IconChevronRight,
 IconLock,
 IconNumber64Small,
 IconPhoto,
 IconCrop,
 IconBrandGithub,
 IconStar,
 IconBraces,
} from '@tabler/icons-react';
import { Link } from 'react-router';
import SEO, { seoConfig } from '../components/SEO';

export default function Home() {
 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 flex flex-col font-sans relative overflow-hidden">
   <SEO {...seoConfig.home} />
   <div className="absolute inset-0 z-0">
    <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
   </div>
   <header className="pt-16 pb-8 px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
     <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
      Dev<span className="text-amber-200">Tools</span>
     </h1>
     <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">Simple, fast, and reliable development utilities built with React</p>

     <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
       href="https://github.com/SiddharthaMishra-dev/js-dev-tools"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
      >
       <IconBrandGithub className="w-4 h-4" />
       <span>View Source</span>
      </a>

      <a
       href="https://github.com/SiddharthaMishra-dev/js-dev-tools"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors duration-200 text-sm font-medium"
      >
       <IconStar className="w-4 h-4" />
       <span>Star on GitHub</span>
      </a>
     </div>
    </div>
   </header>

   <main className="flex-1 flex items-center justify-center px-4 pb-16 relative z-10">
    <div className="max-w-4xl w-full">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link to="/image-to-base64" className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors ease-in-out">
          <IconNumber64Small className="text-amber-200" />
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors">Image to Base64</h3>
         <p className="text-gray-200 text-sm leading-relaxed">Convert images to Base64 format with drag & drop support</p>
         <div className="mt-4 flex items-center text-amber-200 text-sm font-medium">
          <span>Try it now</span>
          <IconChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
         </div>
        </div>
       </div>
      </Link>

      <Link to="/image-format-converter" className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
          <IconPhoto className="text-amber-200" />
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors">Format Converter</h3>
         <p className="text-gray-200 text-sm leading-relaxed">Convert between PNG, JPEG, WebP, and AVIF formats</p>
         <div className="mt-4 flex items-center text-amber-200 text-sm font-medium">
          <span>Try it now</span>
          <IconChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
         </div>
        </div>
       </div>
      </Link>

      <Link to="/image-compressor" className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
          <IconBolt className="text-amber-200" />
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors">Image Compressor</h3>
         <p className="text-gray-200 text-sm leading-relaxed">Reduce file size with quality and dimension controls</p>
         <div className="mt-4 flex items-center text-amber-200 text-sm font-medium">
          <span>Try it now</span>
          <IconChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
         </div>
        </div>
       </div>
      </Link>

      <Link to="/image-cropper" className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
          <IconCrop className="text-amber-200" />
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors">Image Cropper</h3>
         <p className="text-gray-200 text-sm leading-relaxed">Crop and resize images with precision controls and transforms</p>
         <div className="mt-4 flex items-center text-amber-200 text-sm font-medium">
          <span>Try it now</span>
          <IconChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
         </div>
        </div>
       </div>
      </Link>

      <Link to="/json-formatter" className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
          <IconBraces className="text-amber-200" />
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors">JSON Formatter</h3>
         <p className="text-gray-200 text-sm leading-relaxed">Format and validate JSON data with syntax highlighting and minification</p>
         <div className="mt-4 flex items-center text-amber-200 text-sm font-medium">
          <span>Try it now</span>
          <IconChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
         </div>
        </div>
       </div>
      </Link>
     </div>

     {/* Features Section */}
     <div className="mt-16 text-center">
      <h2 className="text-2xl font-bold text-gray-100 mb-8">Why Choose DevTools?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
       <div className="space-y-3">
        <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mx-auto">
         <IconBolt className="text-amber-200 w-6 h-6" />
        </div>
        <h4 className="text-lg font-semibold text-gray-100">Lightning Fast</h4>
        <p className="text-sm text-gray-300">Client-side processing means instant results with no server delays</p>
       </div>

       <div className="space-y-3">
        <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mx-auto">
         <IconLock className="text-amber-200 w-6 h-6" />
        </div>
        <h4 className="text-lg font-semibold text-gray-100">100% Private</h4>
        <p className="text-sm text-gray-300">Your files never leave your browser - complete privacy guaranteed</p>
       </div>

       <div className="space-y-3">
        <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mx-auto">
         <IconPhoto className="text-amber-200 w-6 h-6" />
        </div>
        <h4 className="text-lg font-semibold text-gray-100">All Formats</h4>
        <p className="text-sm text-gray-300">Support for PNG, JPEG, WebP, AVIF and more image formats</p>
       </div>
      </div>
     </div>
    </div>
   </main>

   <footer className="pb-8 px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
     <p className="text-gray-400 text-xs">
      Built for fun by{' '}
      <a
       href="https://sidme.vercel.app/"
       target="_blank"
       rel="noopener noreferrer"
       className="text-amber-200 hover:text-amber-300 transition-colors"
      >
       <i>sidme</i>
      </a>{' '}
      •{' '}
      <a
       href="https://github.com/SiddharthaMishra-dev/js-dev-tools"
       target="_blank"
       rel="noopener noreferrer"
       className="text-amber-200 hover:text-amber-300 transition-colors"
      >
       View Source
      </a>
     </p>
    </div>
   </footer>
  </div>
 );
}
