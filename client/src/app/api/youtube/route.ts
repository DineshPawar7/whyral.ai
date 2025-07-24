import { NextRequest, NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    const videoId = extractVideoID(url);
    if (!videoId) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    const { title, tags } = data.items[0].snippet;

    return NextResponse.json({ title, tags: tags || [] });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to extract tags' }, { status: 500 });
  }
}

function extractVideoID(url: string): string | null {
  try {
    const regExp = /(?:v=|youtu\.be\/|\/embed\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
