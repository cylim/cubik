import { useState } from 'react';
import { ProjectFormData } from '@/components/create-project/createProject';
import { submitProject } from '@/components/create-project/helper/submitProject';
import { useUser } from '@/hooks/useUser';
import { cubikInstance } from '@/utils/contracts';
import {
  connection,
  SEED_MULTISIG,
  SEED_PREFIX,
  SQUADS_PROGRAM_ID,
} from '@/utils/contracts/constant';
import { BN, Wallet, web3 } from '@coral-xyz/anchor';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { PROGRAM_ID } from '@cubik/common/constants';
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
  const [loading, setLoading] = useState<boolean>(false);

  const csdk = cubikInstance(anchorWallet as Wallet);

  const [preview, setPreview] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (anchorWallet === undefined && !user?.mainWallet) {
        throw new Error('No wallet found');
      }
      const counter = Math.floor(1000 + Math.random() * 9000);
      const createKey = web3.Keypair.generate();

      const ppda8 = web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from('project'),
          createKey.publicKey.toBuffer() as Buffer,
          new BN(counter).toArrayLike(Buffer, 'le', 8),
        ],
        new web3.PublicKey(PROGRAM_ID),
      );

      // const [projectPDA] = csdk.project.getPDA(createKey.publicKey);

      // const pda = web3.PublicKey.findProgramAddressSync(
      //   [
      //     Buffer.from('user'),
      //     new web3.PublicKey(
      //       user?.mainWallet || anchorWallet?.publicKey?.toBase58() || '',
      //     ).toBuffer() as Buffer,
      //   ],
      //   new web3.PublicKey(PROGRAM_ID),
      // );
      const [userPDA] = csdk.user.getPDA(
        anchorWallet?.publicKey as web3.PublicKey,
      );
      const [multisigPDA] = web3.PublicKey.findProgramAddressSync(
        [SEED_PREFIX, SEED_MULTISIG, createKey.publicKey.toBytes()],
        SQUADS_PROGRAM_ID,
      );
      console.log(multisigPDA.toBase58(), '-multisig-');
      const args = {
        counter: new BN(counter),
        membersKeys: [
          createKey.publicKey, // todo - replace this with admin key
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
        projectAccount: ppda8[0],
        multisig: multisigPDA,
        owner: new web3.PublicKey(user?.mainWallet || ''),
        squadsProgram: SQUADS_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
      };
      const ix = await csdk.project.create(args, accounts, []);

      const tx = new web3.Transaction().add(ix);
      const { blockhash } = await connection.getLatestBlockhash();
      console.log(connection.rpcEndpoint);
      tx.recentBlockhash = blockhash;
      tx.feePayer = anchorWallet?.publicKey;
      tx.partialSign(createKey);
      const signTx = await anchorWallet?.signTransaction(tx);
      if (!signTx) return;
      const serialized_transaction = signTx.serialize();
      const sig = await connection.sendRawTransaction(serialized_transaction, {
        // skipPreflight: true,
      });
      console.log(sig);
      const res = await submitProject({
        counter,
        createKey: createKey.publicKey.toBase58(),
        sig,
        id: localStorage.getItem('latest-draft-project') || '',
        project: projectForm.getValues(),
        multiSigInfo: {
          createKey: createKey.publicKey.toBase58(),
          multisigPDA: multisigPDA.toBase58(),
        },
      });
      if (res) {
        setStep(5);
        return toast.success('Project submitted successfully');
      }

      return toast.error('Something went wrong. Please try again');
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setLoading(false);
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
            isLoading={loading}
          >
            Submit Project
          </Button>
        </div>
      </div>
    </>
  );
};
