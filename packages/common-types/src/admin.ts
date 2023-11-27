import { JwtPayload } from 'jsonwebtoken';

import { EventType } from '@cubik/database';

export type AccessType = 'GOD' | 'ADMIN';
export type AuthPayload = {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
  accessType?: AccessType;
  accessScope: AccessScope[];
} & JwtPayload;

export interface AccessScope {
  event_name: string;
  event_id: string;
  event_type: EventType;
}

export interface AuthAdminVerifyReturn {
  error: string | null;
  data: boolean;
  user: AuthPayload;
}
