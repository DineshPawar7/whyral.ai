
import { Request, Response } from 'express';
import ytdl from 'ytdl-core';


export const getVideoTags = async (req: Request, res: Response) => {

    

  const { url } = req.body;

  try {
    if (!url || !ytdl.validateURL(url)) {
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    const info = await ytdl.getInfo(url);
    const tags = info.videoDetails.keywords || [];
    console.log("Tags:", tags);

    return res.status(200).json({
        
      title: info.videoDetails.title,
      tags,
      
    }
);
    
  } catch (error: any) {
    console.error("Error fetching YouTube tags:", error.message);
    return res.status(500).json({ error: "Failed to extract tags. YouTube may have changed its structure." });
  }
console.log(JSON.stringify(info.videoDetails, null, 2));
    console.log("Video Title:", info.videoDetails.title);
    console.log("Video Author:", info.videoDetails.author.name);
    console.log("Video Tags:", info.videoDetails.keywords);
};

