import { useState } from 'react';
import { ProjectFormData } from '@/components/create-project/createProject';
import { useUser } from '@/hooks/useUser';
import { getProjectPDA } from '@/utils/contracts';
import {
  connection,
  PROGRAM_ID,
  SEED_MULTISIG,
  SEED_PREFIX,
  SQUADS_PROGRAM_ID,
} from '@/utils/contracts/constant';
import { BN, web3 } from '@coral-xyz/anchor';
import {
  createProject,
  CreateProjectAccounts,
  CreateProjectArgs,
} from '@cubik-so/sdk';
import { UseFormReturn } from 'react-hook-form';

import { DescriptionEditor, PreviewEditor } from '@cubik/editor';
import { Button, SegmentContainer, SegmentItem, Text } from '@cubik/ui';
import { useCubikWallet } from '@cubik/wallet';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step4 = ({ setStep, projectForm }: Props) => {
  const { user } = useUser();
  const { signTransaction } = useCubikWallet();
  const [preview, setPreview] = useState<boolean>(false);
  const onSubmit = async () => {
    try {
      if (!signTransaction) return;
      console.log('hit');
      const counter = Math.floor(1000 + Math.random() * 9000);
      const createKey = web3.Keypair.generate();
      const projectPDA = getProjectPDA(createKey.publicKey, counter);

      const [pda] = web3.PublicKey.findProgramAddressSync(
        [SEED_PREFIX, SEED_MULTISIG, createKey.publicKey.toBytes()],
        PROGRAM_ID,
      );
      const args: CreateProjectArgs = {
        counter: new BN(counter),
        membersKeys: [
          web3.Keypair.generate().publicKey,
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
      const accounts: CreateProjectAccounts = {
        userAccount: new web3.PublicKey(user?.mainWallet || ''),
        multisig: new web3.PublicKey(user?.mainWallet || ''),
        createKey: createKey.publicKey,
        projectAccount: projectPDA,
        owner: new web3.PublicKey(user?.mainWallet || ''),
        squadsProgram: SQUADS_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
      };
      const tx = await createProject(PROGRAM_ID.toBase58(), args, accounts, []);

      tx.partialSign(createKey);
      const { blockhash } = await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = new web3.PublicKey(user?.mainWallet || '');
      const signTx = await signTransaction(tx);
      if (!signTx) return;
      const serialized_transaction = signTx.serialize();
      const sig = await connection.sendRawTransaction(serialized_transaction);
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
