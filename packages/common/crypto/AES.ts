import cryptoJS from 'crypto-js';

export const encryptWithAES = (text: string, key: string) => {
  const enc = cryptoJS.AES.encrypt(text, key).toString();
  return cryptoJS.enc.Base64.stringify(cryptoJS.enc.Utf8.parse(enc));
};

export const decryptWithAES = (ciphertext: string, key: string) => {
  try {
    const decData = cryptoJS.enc.Base64.parse(ciphertext).toString(
      cryptoJS.enc.Utf8,
    );

    return cryptoJS.AES.decrypt(decData, key).toString(cryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Error:', error);
    return null; // Handle the error gracefully
  }
};
