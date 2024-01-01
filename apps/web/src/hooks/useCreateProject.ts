import { v4 as uuidV4 } from 'uuid';
import { create } from 'zustand';

interface CreateProjectState {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreateProject = create<CreateProjectState>()((set) => ({
  onOpen: () => {
    const id = localStorage.getItem('latest-draft-project');
    if (!id) {
      localStorage.setItem('latest-draft-project', uuidV4());
    }
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
