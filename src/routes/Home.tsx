import { IconBolt, IconChevronRight, IconLock, IconNumber64Small, IconPhoto } from '@tabler/icons-react';
import { Link } from 'react-router';

export default function Home() {
 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 flex flex-col">
   <header className="pt-16 pb-8 px-4">
    <div className="max-w-4xl mx-auto text-center">
     <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
      Dev<span className="text-amber-200">Tools</span>
     </h1>
     <p className="text-lg text-gray-200 max-w-2xl mx-auto">Simple, fast, and reliable development utilities built with React</p>
    </div>
   </header>

   <main className="flex-1 flex items-center justify-center px-4 pb-16">
    <div className="max-w-4xl w-full">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link to="/image-to-base64" className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ">
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

      <Link
       to="/image-format-converter"
       className="group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 "
      >
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
          <IconPhoto className="text-amber-200" />
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors">Image Format Converter</h3>
         <p className="text-gray-200 text-sm leading-relaxed">Convert between different image formats</p>
         <div className="mt-4 flex items-center text-amber-200 text-sm font-medium">
          <span>Try it now</span>
          <IconChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
         </div>
        </div>
       </div>
      </Link>
     </div>

     <div className="mt-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
       <div className="space-y-2">
        <div className="rounded-lg flex items-center justify-center mx-auto gap-x-2">
         <IconBolt className="text-amber-200" />
         <h4 className="text-sm font-medium text-gray-100">Fast</h4>
        </div>
        <p className="text-xs text-gray-200">Lightning-fast processing</p>
       </div>
       <div className="space-y-2">
        <div className="rounded-lg flex items-center justify-center mx-auto gap-x-2">
         <IconPhoto className="text-amber-200" />
         <h4 className="text-sm font-medium text-gray-100">Image Support</h4>
        </div>
        <p className="text-xs text-gray-200">Supports various image formats</p>
       </div>
       <div className="space-y-2">
        <div className="rounded-lg flex items-center justify-center mx-auto gap-x-2">
         <IconLock className="text-amber-200" />
         <h4 className="text-sm font-medium text-gray-100">Secure</h4>
        </div>
        <p className="text-xs text-gray-200">Client-side processing</p>
       </div>
      </div>
     </div>
    </div>
   </main>

   <footer className="pb-8 px-4">
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
      </a>
     </p>
    </div>
   </footer>
  </div>
 );
}
