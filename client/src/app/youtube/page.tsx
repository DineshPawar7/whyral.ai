'use client';

import { useState } from 'react';

export default function YouTubeTagsPage() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');

  const handleExtract = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/youtube/extract-tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      setData(result);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Unknown error');
      setData(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">🎯 YouTube Tags Extractor</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube Video URL"
        className="border w-full p-2 rounded mb-4"
      />
      <button
        onClick={handleExtract}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Extract Tags
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {data && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Title: {data.title}</h2>
          <p className="text-sm text-gray-500 mb-2">By {data.author}</p>
          <h3 className="font-medium">Tags:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
