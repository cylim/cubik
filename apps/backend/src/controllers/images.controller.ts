/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import axios from 'axios';
import type { Request, Response } from 'express';
import NodeCache from 'node-cache';
import sharp from 'sharp';
import validator from 'validator';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

// Add this function to revalidate the cache
export const revalidateCache = async () => {
  const keys = cache.keys();
  for (const key of keys) {
    try {
      // Extract size and URL from the key
      const [size, url] = key.split('-');
      const [width, height] = size.split('x').map((s) => parseInt(s, 10));

      // Fetch the image again
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data, 'binary');

      // Resize and reformat the image
      const resizedImage = await sharp(buffer)
        .resize(width, height)
        .toFormat('png')
        .toBuffer();

      // Update the cache with the new image
      const cacheDir =
        process.env.NODE_ENV !== 'production'
          ? path.join(__dirname, '../../../../cache')
          : '/root/cache/images';
      const resizedImagePath = path.join(cacheDir, encodeURIComponent(key));
      fs.writeFileSync(resizedImagePath, resizedImage, { flag: 'w' });
      cache.set(key, resizedImagePath);
    } catch (error) {
      console.error(`Error revalidating cache for key ${key}:`, error);
    }
  }
};

export const imageFilter = async (req: Request, res: Response) => {
  // /?size=500x500&url=<https://...>
  const { size, url } = req.query as {
    size: string;
    url: string;
  };

  if (!size || !url) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  const [width, height] = size.split('x').map((s) => parseInt(s, 10));

  // Validate and sanitize URL
  if (
    !validator.isURL(url, {
      protocols: ['http', 'https'],
      host_whitelist: ['imagedelivery.net', 'uploadthing.com', 'utfs.io'],
      require_protocol: true,
    }) ||
    !validator.isURL(url)
  ) {
    return res.status(400).send('Invalid URL');
  }

  // const sanitizedUrl = validator.escape(url);
  const sanitizedUrl = url;
  const cacheKey = `${size}-${sanitizedUrl}`;

  // Check cache
  if (cache.has(cacheKey)) {
    return res.sendFile(cache.get(cacheKey) as string);
  }

  try {
    const response = await axios.get(sanitizedUrl, {
      responseType: 'arraybuffer',
    });
    const buffer = Buffer.from(response.data, 'binary');

    let cacheDir;
    if (process.env.NODE_ENV !== 'production') {
      cacheDir = path.join(__dirname, '../../../../cache');
    } else {
      cacheDir = '/root/cache/images';
    }

    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    const resizedImagePath = path.join(cacheDir, encodeURIComponent(cacheKey));

    const resizedImage = await sharp(buffer)
      .resize(width, height)
      .toFormat('png')
      .toBuffer();

    // Write the resized image to cache directory
    fs.writeFileSync(resizedImagePath, resizedImage, {
      flag: 'w',
    });

    cache.set(cacheKey, resizedImagePath);

    // Stream the resized image
    const readStream = Readable.from(resizedImage);
    res.setHeader('Content-Type', 'image/png');
    readStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing image');
  }
};
