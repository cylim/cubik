'use server';

import { ActivityType } from '@cubik/database';
// import { ActivityType } from '@cubik/database';
import { logApi } from '@cubik/logger/src/axiom';
import { sendEmail as sendOtpEmail } from '@cubik/notifications';
import { createRedisInstance } from '@cubik/redis';

function generateOTP(): number {
  const otp = Math.floor(100000 + Math.random() * 900000);
  if (otp.toString().length !== 6) {
    return generateOTP();
  }
  return otp;
}
export const sendEmail = async (
  email: string,
  username: string,
  pubkey: string,
) => {
  try {
    const redis = createRedisInstance();
    const otp = generateOTP();

    redis.set(email, otp, 'EX', 600);
    logApi({
      message: 'sendEmail OTP',
      body: {
        email,
        username,
        pubkey,
      },
      level: 'info',
      source: 'sendEmail OTP',
    });
    const emailRes = await sendOtpEmail(email, ActivityType.OTP_VERIFIED, {
      subject: `OTP Verification ${otp}`,
      text: ``,
      data: {
        code: otp,
      },
    });
    logApi({
      message: 'sendEmail OTP Response Body',
      body: {
        ...emailRes,
      },
      level: 'info',
      source: 'sendEmail OTP',
    });
    return emailRes?.data?.id;
  } catch (e) {
    const error = e as Error;
    logApi({
      message: error.message,
      error: error,
      statusCode: 500,
      body: {
        email,
        username,
        pubkey,
      },
      level: 'error',
      source: 'sendEmail OTP',
    });
  }
};
