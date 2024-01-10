'use server';

import { logApi } from '@cubik/logger/src';
import { createRedisInstance } from '@cubik/redis';

export const checkOTP = async (otp: string, email: string) => {
  try {
    const redis = createRedisInstance();
    const ServerOTP = await redis.get(email);
    if (!ServerOTP) {
      throw new Error('OTP Expired. Resend a new OTP');
    }

    if (otp !== ServerOTP) {
      throw new Error('Invalid OTP');
    }
    logApi({
      message: `${otp} -- otp`,
      statusCode: 500,
      body: {
        email,
        otp,
      },
      level: 'error',
      source: 'checkOTP',
    });
    if (otp === ServerOTP) {
      redis.del(email);
      return true;
    }
    return false;
  } catch (e) {
    const error = e as Error;

    logApi({
      message: error.message,
      error: error,
      statusCode: 500,
      body: {
        email,
        otp,
      },
      level: 'error',
      source: 'checkOTP',
    });
    return false;
  }
};
