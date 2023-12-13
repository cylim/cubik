import React from 'react';

import { formatAddress } from '@cubik/common';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Tag, TagLabel } from '../Tag';
import { Text } from '../text/text';

interface Props {
  onClose: () => void;
  open: boolean;
  isLoading: boolean;
  handleVerify: () => void;
  address: string;
}
export const VerifyModal = ({
  onClose,
  open,
  isLoading,
  handleVerify,
  address,
}: Props) => {
  return (
    <Modal dialogSize="sm" onClose={onClose} open={open}>
      <div className="p-6">
        <div className="flex justify-start items-center gap-3 ">
          <Text className="h5" color={'primary'}>
            Wallet Connected
          </Text>
          <Tag
            size="desktop"
            border={false}
            color={'subtle-orange'}
            variant="subtle"
          >
            <TagLabel>{formatAddress(address)}</TagLabel>
          </Tag>
        </div>
        <div className="flex flex-col justify-start gap-4 mt-4  text-base font-normal">
          <Text className="l2-light" color={'secondary'}>
            Connection successful! Please sign a one-time transaction to verify
            your ownership.
          </Text>
          <Text className="l2-light" color={'secondary'}>
            <ul className="list-disc px-4">
              <li>No Sol will be deducted</li>
              <li>This confirm you&apos;re the wallet owner</li>
            </ul>
          </Text>
          <div className="pointer-events-auto flex items-center justify-center gap-5">
            <Button
              className="w-full"
              size={'md'}
              onClick={onClose}
              variant={'secondary'}
            >
              Cancel
            </Button>
            <Button
              isLoading={isLoading}
              size={'md'}
              className="w-full"
              variant={'primary'}
              onClick={handleVerify}
            >
              Sign & Confirm
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
