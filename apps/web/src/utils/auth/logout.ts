import { cookies } from 'next/headers';

export const handleLogout = async () => {
  try {
    cookies().delete('authToken');
    return 'success';
  } catch (error) {
    console.log(error);
    return null;
  }
};
