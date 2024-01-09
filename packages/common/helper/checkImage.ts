export const CheckImage = (url: string): boolean => {
  try {
    const _url = new URL(url);

    // Check if the hostname and pathname match the required pattern
    const isHostnameValid = _url.hostname === 'image.cubik.so';
    const isPathnameValid = /^\/images\/[A-Za-z0-9-]+$/.test(_url.pathname);

    return isHostnameValid && isPathnameValid;
  } catch (error) {
    // The URL constructor will throw an error if the URL is not valid
    return false;
  }
};
