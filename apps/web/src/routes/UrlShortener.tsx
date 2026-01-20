import { useState } from 'react';
import { IconLink, IconCopy, IconCheck, IconChartBar } from '@tabler/icons-react';
import SEO, { seoConfig } from '../components/SEO';

export default function UrlShortener() {
 const [url, setUrl] = useState('');
 const [shortUrl, setShortUrl] = useState('');
 const [loading, setLoading] = useState(false);
 const [copied, setCopied] = useState(false);
 const [error, setError] = useState('');

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setShortUrl('');

  try {
   const response = await fetch('http://localhost:5000/api/shorten', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
   });

   const data = await response.json();

   if (!response.ok) {
    throw new Error(data.error || 'Something went wrong');
   }

   setShortUrl(`http://localhost:3001/${data.shortCode}`);
  } catch (err: any) {
   setError(err.message);
  } finally {
   setLoading(false);
  }
 };

 const copyToClipboard = () => {
  navigator.clipboard.writeText(shortUrl);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
 };

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex flex-col items-center pt-24">
   <SEO {...seoConfig.home} title="URL Shortener - JS DevTools" description="Shorten your URLs efficiently and privately." />

   <div className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl">
    <div className="flex items-center space-x-3 mb-6">
     <div className="p-3 bg-indigo-600 rounded-lg">
      <IconLink className="w-8 h-8 text-white" />
     </div>
     <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">URL Shortener</h1>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">
     <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300 ml-1">Enter your long URL</label>
      <div className="relative group">
       <input
        type="url"
        required
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com/very-long-url..."
        className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500 hover:border-gray-500"
       />
      </div>
     </div>

     <button
      type="submit"
      disabled={loading}
      className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold py-4 rounded-xl transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-indigo-500/25"
     >
      {loading ? (
       <span className="flex items-center justify-center space-x-2">
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        <span>Shortening...</span>
       </span>
      ) : (
       'Shorten URL'
      )}
     </button>
    </form>

    {error && (
     <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm flex items-center">
      <span className="mr-2">⚠️</span> {error}
     </div>
    )}

    {shortUrl && (
     <div className="mt-8 p-6 bg-gray-900/80 rounded-xl border border-indigo-500/30 shadow-inner animate-in fade-in slide-in-from-bottom-4 duration-500">
      <label className="text-sm font-medium text-gray-400 block mb-2">Your shortened URL</label>
      <div className="flex items-center gap-3">
       <input readOnly value={shortUrl} className="flex-1 bg-transparent text-xl font-mono text-indigo-300 focus:outline-none" />
       <button
        onClick={copyToClipboard}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors group relative"
        title="Copy to clipboard"
       >
        {copied ? <IconCheck className="w-6 h-6 text-green-400" /> : <IconCopy className="w-6 h-6 text-gray-400 group-hover:text-white" />}
       </button>
      </div>
     </div>
    )}
   </div>

   <div className="mt-12 text-center max-w-lg text-gray-400 text-sm">
    <p>Unlike other shorteners, we don't track your users beyond a simple click count. Your data remains private and secure.</p>
   </div>
  </div>
 );
}
