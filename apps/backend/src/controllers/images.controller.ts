/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Readable } from 'stream';
import axios from 'axios';
import type { Request, Response } from 'express';
import express from 'express';
import Controller from 'interfaces/controller.interface';
import logger from 'services/logger';
import sharp from 'sharp';
import { imageCache, toMilliseconds } from 'utils/cache';
import validator from 'validator';
import z from 'zod';

import { errorHandler } from '@cubik/database/api';

class ImageController implements Controller {
  public path = '/image';
  public router = express.Router();
  public querySchema = z.object({
    size: z.string().min(1).max(9),
    url: z.string().min(1).max(1000),
  });

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/filter`, this.imageFilter);
    logger.debug('ImageController initialized');
  }

  private imageFilter = async (req: Request, res: Response) => {
    // @todo -- revalidate cache every 24 hrs

    const parsed = await this.querySchema.safeParseAsync(req.query);
    if (!parsed.success) {
      return res.status(400).json(errorHandler(parsed.error));
    }

    // /:size/:url --> 500x500/<url>
    const { size, url } = req.query as {
      size: string;
      url: string;
    };

    if (!size || !url) {
      return res.status(400).json({
        error: 'Missing required fields',
      });
    }

    console.log('size', size);
    console.log('url', url);

    const [width, height] = size.split('x').map((s) => parseInt(s, 10));

    // Validate and sanitize URL
    if (
      !validator.isURL(url, {
        protocols: ['http', 'https'],
        host_whitelist: [
          'imagedelivery.net',
          'uploadthing.com',
          'utfs.io',
          'cdn.helius-rpc.com',
        ],
        require_protocol: true,
      }) ||
      !validator.isURL(url)
    ) {
      return res.status(400).send('Invalid URL');
    }

    // const sanitizedUrl = validator.escape(url);
    const sanitizedUrl = url;
    const cacheKey = `${size}-${sanitizedUrl}`;

    if (imageCache.has(cacheKey)) {
      const cachedImage = imageCache.get(cacheKey);
      if (cachedImage) {
        const readStream = Readable.from(cachedImage);
        res.setHeader('Content-Type', 'image/png');
        readStream.pipe(res);
        return;
      }
    }

    // // Check cache
    // if (cache.has(cacheKey)) {
    //   return res.sendFile(cache.get(cacheKey) as string);
    // }

    try {
      const response = await axios.get(sanitizedUrl, {
        responseType: 'arraybuffer',
      });
      const buffer = Buffer.from(response.data, 'binary');

      // const cacheDir = path.join(__dirname, '../../../../cache');
      // if (!fs.existsSync(cacheDir)) {
      //   fs.mkdirSync(cacheDir, { recursive: true });
      // }

      // const resizedImagePath = path.join(
      //   cacheDir,
      //   encodeURIComponent(cacheKey),
      // );

      const resizedImage = await sharp(buffer)
        .resize(width, height)
        .toFormat('png')
        .toBuffer();

      // // Write the resized image to cache directory
      // fs.writeFileSync(resizedImagePath, resizedImage, {
      //   flag: 'w',
      // });

      imageCache.set(cacheKey, resizedImage, toMilliseconds(24, 0, 0));

      // cache.set(cacheKey, resizedImagePath);

      // Stream the resized image
      const readStream = Readable.from(resizedImage);
      res.setHeader('Content-Type', 'image/png');
      readStream.pipe(res);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error processing image');
    }
  };
}

export default ImageController;
