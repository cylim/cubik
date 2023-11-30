import type { RedisOptions } from 'ioredis';
import { Redis } from 'ioredis';

export const createRedisInstance = (options: RedisOptions): Redis => {
  return new Redis(options);
};

export const checkUploadLimit = async (
  redisClient: Redis,
  authToken: string,
): Promise<boolean> => {
  const key = `upload_limit:${authToken}`;
  const currentTimestamp = Math.floor(Date.now() / 1000);

  try {
    // Retrieve the count and timestamp from Redis
    const result = await redisClient
      .multi()
      .get(`${key}:count`)
      .get(`${key}:timestamp`)
      .exec();

    if (result) {
      const count = parseInt(result[0][1] as string, 10) || 0;
      const lastTimestamp = parseInt(result[1][1] as string, 10) || 0;

      // Check if the last request was within the last minute
      if (currentTimestamp - lastTimestamp < 60) {
        // Increment the count
        await redisClient.incr(`${key}:count`);
      } else {
        // Reset the count and update the timestamp
        await redisClient
          .multi()
          .set(`${key}:count`, 1)
          .set(`${key}:timestamp`, currentTimestamp)
          .exec();
      }

      // Check if the upload limit is exceeded
      if (count >= 5) {
        return false; // Upload limit exceeded
      } else {
        return true; // Upload is allowed
      }
    } else {
      // Set the count and timestamp
      await redisClient
        .multi()
        .set(`${key}:count`, 1)
        .set(`${key}:timestamp`, currentTimestamp)
        .exec();

      return true; // Upload is allowed
    }
  } catch (error) {
    console.error('Error checking upload limit:', error);
    return false; // Assume upload is not allowed in case of an error
  }
};

export const markTransactionNotConfirmed = async (
  transactionHash: string,
  redisClient: Redis,
) => {
  await redisClient.set(transactionHash, 'false', 'EX', 2592000);
};

export const checkTransactionConfirmed = async (
  transactionHash: string,
  redisClient: Redis,
): Promise<boolean> => {
  const result = await redisClient.get(transactionHash);

  if (result === 'true') {
    return true;
  } else {
    return false;
  }
};

export const markTransactionConfirmed = async (
  transactionHash: string,
  redisClient: Redis,
) => {
  await redisClient.set(transactionHash, 'true');
};
