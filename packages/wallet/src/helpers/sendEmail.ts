'use server';

// import { ActivityType } from '@cubik/database';
import { logApi } from '@cubik/logger/src';

// import { sendEmail as sendOtpEmail } from '@cubik/notifications';

export const sendEmail = async (
  email: string,
  username: string,
  pubkey: string,
) => {
  try {
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
    // const emai = await sendOtpEmail(email, ActivityType.OTP_VERIFIED);
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
