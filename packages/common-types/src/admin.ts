import { JwtPayload } from 'jsonwebtoken';

import { EventType } from '@cubik/database';

export type AuthPayload = {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
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

export interface AdminUser {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
  accessScope: AccessScope[];
}
