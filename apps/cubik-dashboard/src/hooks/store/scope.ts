import { create } from 'zustand';

import type { AccessScope } from '@cubik/common-types/src/admin';

interface AccessScopeType {
  scope: AccessScope | null;
  setAccessScope: (accessScope: AccessScope | null) => void;
}
export const AccessStore = create<AccessScopeType>()((set) => ({
  scope: null,
  accessType: undefined,
  setAccessScope: (access) => {
    set({
      scope: access,
    });
  },
}));
