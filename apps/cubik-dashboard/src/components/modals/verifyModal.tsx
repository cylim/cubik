'use client';

import { Dispatch, SetStateAction, useRef } from 'react';
import { useUser } from '@/context/user';
import { verifyUser } from '@/utils/helpers/verifyUser';
import { useWallet } from '@solana/wallet-adapter-react';
import { useMutation } from '@tanstack/react-query';

import { VerifyModal as VerificationModal } from '@cubik/ui';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const VerifyModal = ({ open, setOpen }: Props) => {
  const cancelButtonRef = useRef(null);
  const { signMessage, publicKey } = useWallet();
  const { setUser } = useUser();

  const verifyMutation = useMutation({
    mutationFn: verifyUser,
    mutationKey: ['verify', 'user'],
    onSuccess: (data) => {
      if (data?.error === 'Not a User') {
        setOpen(false);
        setUser(null);
      }
      if (data?.user) {
        setUser({
          accessScope: data.user.accessScope,
          accessType: data.user.accessType,
          id: data.user.id,
          mainWallet: data.user.mainWallet,
          profilePicture: data.user.profilePicture,
          username: data.user.username,
        });
        return;
      }
      setUser(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <VerificationModal
      address={publicKey?.toBase58() || ''}
      handleVerify={() =>
        verifyMutation.mutate({
          publicKey: publicKey?.toBase58() as string,
          signMessage,
        })
      }
      isLoading={verifyMutation.isLoading}
      onClose={() => setOpen(false)}
      open={open}
    />
  );
};
