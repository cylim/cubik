/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { WalletAdapter } from '@solana/wallet-adapter-base';
import { toast } from 'sonner';

import { Avatar, Button, Text } from '@cubik/ui';

import { useCubikWallet, useCubikWalletContext } from '../context/CubikContext';
import { useUserModalUIContext } from '../context/WalletUIContext';

const WalletConnectStatus = ({
  icon,
  name,
  status,
  adapter,
}: {
  icon: string;
  name: string;
  status: 'connecting' | 'failed' | 'connected' | null;
  adapter: WalletAdapter;
  error?: string;
}) => {
  const { select } = useCubikWallet();
  const [loading, setLoading] = useState(false);
  const { setIsWalletError } = useCubikWalletContext();
  const { setModalState } = useUserModalUIContext();
  const onRetry = async () => {
    try {
      setLoading(true);
      select(adapter.name);
      await adapter.connect();
      setModalState('wallet-verify');
      toast.success('Wallet Connected');
    } catch (e) {
      const error = e as Error;
      if (error.message) {
        console.log(error);
        setIsWalletError({
          error,
          message: error.message,
          name: error.name,
        });
        return null;
      } else {
        const newError = new Error('User rejected the request');
        setIsWalletError({
          error: newError,
          message: 'User rejected the request',
          name: 'Error',
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6">
      <div
        style={{
          marginBottom: '1rem',
          display: 'block',
        }}
      >
        <Avatar size={'xl'} src={icon} alt={name} />
      </div>
      <div className="flex justify-start  items-center gap-3 ">
        <Text className="h5" color={'primary'}>
          {status === 'connecting'
            ? 'Connecting Wallet...'
            : status === 'failed'
            ? 'You rejected the request'
            : 'Connected Succesfully'}
        </Text>
      </div>
      <div className="flex flex-col justify-start gap-4 mt-4  text-base font-normal">
        <Text className="l2-light" color={'secondary'}>
          {status === 'connecting'
            ? 'Connecting Wallet...'
            : status === 'failed'
            ? 'You rejected the request'
            : 'Connected Succesfully'}
        </Text>
        {status === 'failed' ? (
          <div className="pointer-events-auto flex items-center justify-center gap-5">
            <Button
              className="w-full"
              size={'md'}
              variant={'secondary'}
              isLoading={loading}
              onClick={onRetry}
            >
              Retry
            </Button>
          </div>
        ) : (
          <div className="pointer-events-auto flex items-center justify-center gap-5">
            <Button
              className="w-full"
              size={'md'}
              variant={'secondary'}
              isLoading={true}
            >
              Retry
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnectStatus;
