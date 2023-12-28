'use server';

import { createRedisInstance } from '@cubik/redis';

export const checkOTP = async (otp: string, email: string) => {
  const redis = createRedisInstance();
  const ServerOTP = await redis.get(email);
  if (!ServerOTP) {
    throw new Error('OTP Expired. Resend a new OTP');
  }

  if (otp !== ServerOTP) {
    throw new Error('Invalid OTP');
  }

  if (otp === ServerOTP) {
    redis.del(email);
    return true;
  }
  return false;
};
