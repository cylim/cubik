import { create } from "zustand";

export interface User {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
}

interface UserState {
  user: User | null;
  setUser: (userData: User | null) => void;
  logout: () => void;
}


export const useUser = create<UserState>()((set) => ({
  setUser: (user) => {
    return set({
      user,
    });
  },
  user: null,
  logout:()=> {
    return set({
        user: null
    })
  }
}));
