import { create } from 'zustand';

import { UserAuth } from '@cubik/common-types';

interface UserState {
  user: UserAuth | null;
  setUser: (userData: UserAuth | null) => void;
  logout: () => void;
}

export const useUser = create<UserState>()((set) => ({
  setUser: (user) => {
    return set({
      user,
    });
  },
  user: null,
  logout: () => {
    return set({
      user: null,
    });
  },
}));
