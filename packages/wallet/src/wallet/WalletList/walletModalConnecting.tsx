import React from 'react';

import { Avatar, Button, Text } from '@cubik/ui';

const WalletConnectStatus = ({
  icon,
  name,
  status,
}: {
  icon: string;
  name: string;
  status: 'connecting' | 'failed' | 'connected' | null;
}) => {
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
              //  onClick={onClose}
              variant={'secondary'}
            >
              Retry
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default WalletConnectStatus;
