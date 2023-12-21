export const getMessage = async (nonce: string) => {
  try {
    const res = await fetch('/api/auth/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-cubik-nonce': nonce,
      },
    });
    const data = await res.json();
    return data.hash;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const handleLogout = async () => {
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return 'success';
  } catch (error) {
    console.log(error);
    return null;
  }
};
