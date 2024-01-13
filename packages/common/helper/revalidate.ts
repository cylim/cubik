'use server';

import { revalidatePath } from 'next/cache';

export const handleRevalidation = (path: string) => {
  try {
    revalidatePath(path, 'page');
  } catch (error) {
    console.log(error);
  }
};
