import { useState } from 'react';
import { ProjectFormData } from '@/components/create-project/createProject';
import { useUser } from '@/hooks/useUser';
import { cubikInstance } from '@/utils/contracts';
import {
  connection,
  PROGRAM_ID,
  SEED_MULTISIG,
  SEED_PREFIX,
  SQUADS_PROGRAM_ID,
} from '@/utils/contracts/constant';
import { BN, Wallet, web3 } from '@coral-xyz/anchor';
import { UseFormReturn } from 'react-hook-form';

import { DescriptionEditor, PreviewEditor } from '@cubik/editor';
import { Button, SegmentContainer, SegmentItem, Text } from '@cubik/ui';
import { useAnchorWallet, useCubikWallet } from '@cubik/wallet';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step4 = ({ setStep, projectForm }: Props) => {
  const { user } = useUser();
  const anchorWallet = useAnchorWallet();

  const csdk = cubikInstance(anchorWallet as Wallet);

  const [preview, setPreview] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      if (anchorWallet === undefined && !user?.mainWallet) {
        throw new Error('No wallet found');
      }
      const counter = Math.floor(1000 + Math.random() * 9000);
      const createKey = web3.Keypair.generate();
      const [projectPDA] = csdk.ix.project.getPDA(createKey.publicKey, counter);
      const pda = web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from('user'),
          new web3.PublicKey(
            '6fa2ofZmwjiFv4a6xNt3jftHwuM3S73Vb5VE3LRKCoj',
          ).toBuffer() as Buffer,
        ],
        PROGRAM_ID,
      );
      const [userPDA] = csdk.ix.user.getPDA();
      console.log(userPDA.toBase58(), '---', pda[0].toBase58());
      const [multisigPDA] = web3.PublicKey.findProgramAddressSync(
        [SEED_PREFIX, SEED_MULTISIG, createKey.publicKey.toBytes()],
        PROGRAM_ID,
      );
      const args = {
        counter: new BN(counter),
        membersKeys: [
          createKey.publicKey,
          new web3.PublicKey(user?.mainWallet || ''),
        ],
        configAuthority: null,
        memo: JSON.stringify({
          n: `Cubik<>${projectForm.watch('name')}`,
          d: projectForm.watch('tagline'),
          i: projectForm.watch('logo'),
        }),
        threshold: 2,
        timeLock: 0,
      };
      const accounts = {
        userAccount: userPDA,
        createKey: createKey.publicKey,
        projectAccount: projectPDA,
        multisig: multisigPDA,
        owner: new web3.PublicKey(user?.mainWallet || ''),
        squadsProgram: SQUADS_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
      };
      const ix = await csdk.ix.project.create(args, accounts);
      const tx = new web3.Transaction().add(ix);
      const { blockhash } = await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = new web3.PublicKey(user?.mainWallet || '');
      tx.partialSign(createKey);
      const signTx = await anchorWallet?.signTransaction(tx);
      if (!signTx) return;
      const serialized_transaction = signTx.serialize();
      const sig = await connection.sendRawTransaction(serialized_transaction, {
        skipPreflight: true,
      });
      console.log(sig);
      alert(sig);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return (
    <>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-1">
          <Text className="b4-light" color={'tertiary'}>
            4/5
          </Text>
          <Text className="h5" color={'primary'}>
            Detailed Description
          </Text>
          <Text className="b4-light" color={'secondary'}>
            Add Detailed description about the project
          </Text>
        </div>

        <div className="pointer-events-auto flex w-full flex-col gap-3">
          <div className="w-max">
            <SegmentContainer size="md">
              <SegmentItem
                isActive={!preview}
                onClick={() => {
                  setPreview(false);
                }}
              >
                Edit
              </SegmentItem>
              <SegmentItem
                isActive={preview}
                onClick={() => {
                  setPreview(true);
                }}
              >
                Preview
              </SegmentItem>
            </SegmentContainer>
          </div>
          {preview ? (
            <PreviewEditor content={projectForm.watch('description')} />
          ) : (
            <DescriptionEditor
              content={projectForm.watch('description')}
              onUpdate={(e) => {
                projectForm.setValue('description', e);
              }}
            />
          )}
        </div>

        <div className="mt-14 flex w-full items-center justify-between">
          <Button
            onClick={() => setStep(3)}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={onSubmit}
            rightIconName="chevronRight"
            variant={'primary'}
            size={'md'}
          >
            Submit Project
          </Button>
        </div>
      </div>
    </>
  );
};
