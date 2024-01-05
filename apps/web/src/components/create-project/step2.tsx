import { ProjectFormData } from '@/components/create-project';
import { LogoUploader } from '@/components/create-project/image-uploder/logoUploader';
import { MultiImageUploader } from '@/components/create-project/image-uploder/multiImageUploader';
import { useUploadThing } from '@/utils/uploadthing';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { Button, ImageUploader, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step2 = ({ setStep, projectForm }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col">
          <Text className="b4-light" color={'tertiary'}>
            2/5
          </Text>
          <Text className="h5 py-1" color={'primary'}>
            How Does it look
          </Text>
          <Text className="b4-light" color={'secondary'}>
            lets make your project look nice
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Thumbnail
          </Text>
          <LogoUploader projectForm={projectForm} />
        </div>
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Gallery
          </Text>
          <MultiImageUploader projectForm={projectForm} />
        </div>

        <div className=" flex w-full items-center justify-between">
          <Button
            onClick={() => setStep(1)}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(3)}
            rightIconName="chevronRight"
            variant={'primary'}
            size={'md'}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
