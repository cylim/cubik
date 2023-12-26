import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export const DEFAULT_COOKIE_OPTIONS: Partial<ResponseCookie> = {
  expires: new Date(Date.now() + 3600000 * 4),
  secure: true,
  httpOnly: true,
  sameSite: 'strict',
  path: '/',
};
