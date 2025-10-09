import { Link } from 'react-router';

export default function Home() {
 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
   <header className="pt-16 pb-8 px-4">
    <div className="max-w-4xl mx-auto text-center">
     <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Dev<span className="text-blue-600">Tools</span>
     </h1>
     <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simple, fast, and reliable development utilities built with React</p>
    </div>
   </header>

   <main className="flex-1 flex items-center justify-center px-4 pb-16">
    <div className="max-w-4xl w-full">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link
       to="/image-to-base64"
       className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
      >
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
           />
          </svg>
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Image to Base64</h3>
         <p className="text-gray-600 text-sm leading-relaxed">Convert images to Base64 format with drag & drop support</p>
         <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
          <span>Try it now</span>
          <svg
           className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
          >
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
         </div>
        </div>
       </div>
      </Link>

      <Link
       to="/image-format-converter"
       className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
      >
       <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
           />
          </svg>
         </div>
        </div>
        <div className="flex-1">
         <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Image Format Converter</h3>
         <p className="text-gray-600 text-sm leading-relaxed">Convert between different image formats</p>
         <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
          <span>Try it now</span>
         </div>
        </div>
       </div>
      </Link>
     </div>

     <div className="mt-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
       <div className="space-y-2">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
         <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
         </svg>
        </div>
        <h4 className="text-sm font-medium text-gray-800">Fast</h4>
        <p className="text-xs text-gray-500">Lightning-fast processing</p>
       </div>
       <div className="space-y-2">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
         <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
         </svg>
        </div>
        <h4 className="text-sm font-medium text-gray-800">Secure</h4>
        <p className="text-xs text-gray-500">Client-side processing</p>
       </div>
       <div className="space-y-2">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
         <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
         </svg>
        </div>
        <h4 className="text-sm font-medium text-gray-800">Mobile Ready</h4>
        <p className="text-xs text-gray-500">Works on all devices</p>
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
       className="text-blue-500 hover:text-blue-600 transition-colors underline"
      >
       <i>sidme</i>
      </a>
     </p>
    </div>
   </footer>
  </div>
 );
}
