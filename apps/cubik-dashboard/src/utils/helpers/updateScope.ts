'use server';

import { cookies } from 'next/headers';
import { DEFAULT_COOKIE_OPTIONS } from '@/constants/cookies';

import { AccessScope } from '@cubik/common-types/src/admin';

export const updateScope = (scope: AccessScope) => {
  cookies().delete('access-scope');
  cookies().set('access-scope', scope.event_id, DEFAULT_COOKIE_OPTIONS);
};
