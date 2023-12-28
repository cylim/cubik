import { create } from 'zustand';

interface CreateProjectState {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreateProject = create<CreateProjectState>()((set) => ({
  onOpen: () => {
    return set({
      open: true,
    });
  },
  onClose: () => {
    return set({
      open: false,
    });
  },
  open: false,
}));
