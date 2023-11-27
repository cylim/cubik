export const getToken = async () => {
  try {
    const res = await fetch(env.NEXT_PUBLIC_BACKEND + '/auth/token', {
      cache: 'no-cache',
      method: 'GET',
    });
    const data = (await res.json()) as AuthTokenCheckReturn;
    if (data.error ?? !data.data) {
      return null;
    }
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
