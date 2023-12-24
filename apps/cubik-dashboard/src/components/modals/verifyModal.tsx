'use client';

import { Dispatch, SetStateAction, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { handleAccessOnServer } from '@/components/Headers/handleAccessOnServer';
import { AccessStore } from '@/hooks/store/scope';
import { useUser } from '@/hooks/store/user';
import { handleRevalidation } from '@/utils/helpers/revalidate';
import { verifyUser } from '@/utils/helpers/verifyUser';
import { useMutation } from '@tanstack/react-query';

import { VerifyModal as VerificationModal } from '@cubik/ui';
import { useCubikWallet } from '@cubik/wallet';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const VerifyModal = ({ open, setOpen }: Props) => {
  const { signMessage, publicKey } = useCubikWallet();
  const { setAccessScope } = AccessStore();
  const { setUser } = useUser();
  const pathname = usePathname();
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
        handleAccessOnServer(data.user.accessScope[0].event_id);
        setAccessScope(data.user.accessScope[0], 'ADMIN');
        handleRevalidation(pathname || '/');
        return;
      }
      setUser(null);
      handleRevalidation(pathname || '/');
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
