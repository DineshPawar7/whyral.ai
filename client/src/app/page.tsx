// 'use client';

// import { useState } from 'react';

// export default function Home() {
//   const [url, setUrl] = useState('');
//   const [data, setData] = useState<{ title: string; tags: string[] } | null>(null);
//   const [error, setError] = useState('');
//     console.log("API Key:", process.env.YOUTUBE_API_KEY);


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setData(null);

//     const res = await fetch('/api/youtube', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ url }),
//     });

//     const result = await res.json();

//     if (!res.ok) {
//       setError(result.error);
//     } else {
//       setData(result);
//     }
//   };

//   return (
//     <main className="p-8 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">🎬 YouTube Tags Extractor</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter YouTube video URL"
//           className="w-full p-2 border rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Extract Tags
//         </button>
//       </form>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {data && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">🎯 Title: {data.title}</h2>
//           <p className="mt-2">🏷️ Tags:</p>
//           <ul className="list-disc ml-5">
//             {data.tags.map((tag, index) => (
//               <li key={index}>{tag}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </main>
//   );
// }





export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to the Startup</h1>
    </div>
  )
}
