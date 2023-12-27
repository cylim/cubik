import { create } from 'zustand';

import { AdminUser } from '@cubik/common-types/src/admin';

interface UserState {
  user: AdminUser | null;
  setUser: (user: AdminUser | null) => void;
}

export const useUser = create<UserState>()((set) => ({
  setUser: (user) => {
    return set({
      user,
    });
  },
  user: null,
}));
