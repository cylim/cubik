'use server';

import { revalidatePath } from 'next/cache';

export const handleRevalidation = (path: string) => {
  revalidatePath(path);
};
