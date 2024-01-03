import { utils, web3 } from '@coral-xyz/anchor';
import nacl from 'tweetnacl';

import { createMessage, createProjectEditMessage } from './createMessage';

export const verifyMessage = (
  signature: string,
  publicKey: web3.PublicKey,
  hash: string,
) => {
  const message = createMessage(hash);
  if (!message) {
    return false;
  }

  const result = nacl.sign.detached.verify(
    message,
    utils.bytes.bs58.decode(signature),
    publicKey.toBuffer(),
  );

  return result;
};

export const verifyProjectEditMessage = (
  signature: string,
  publicKey: web3.PublicKey,
  hash: string,
) => {
  const message = createProjectEditMessage(hash);
  if (!message) {
    return false;
  }

  const result = nacl.sign.detached.verify(
    message,
    utils.bytes.bs58.decode(signature),
    publicKey.toBuffer(),
  );

  return result;
};
