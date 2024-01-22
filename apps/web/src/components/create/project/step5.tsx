import { useState } from 'react';
import StepTemplate from '@/components/create/project/stepTemplate';
import { IProjectData } from '@/types/project';
import axios, { AxiosResponse } from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Control,
  Controller,
  FieldErrors,
  useFieldArray,
  useFormContext,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import { ApiResponseType } from '@cubik/database/api';
import {
  AsyncSelect,
  Button,
  HelperText,
  Icon,
  InputContainer,
  InputLabel,
  Select,
  Text,
} from '@cubik/ui';

//       team: z.array(
//            z.object({
//             name: z.string(),
//             role: z.string(),
//           }),
//         ),

interface SearchResults {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
}

interface SearchResults {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
}

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}

export const Step5 = ({ setStep, forceSave }: Props) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<IProjectData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'team' });

  const [searchResult, setSearchResult] = useState<SearchResults[]>([]);
  const [search, setSearch] = useState<string>('');

  const PositionsOption = [
    {
      label: 'Developer',
      value: 'Developer',
    },
    {
      label: 'Designer',
      value: 'Designer',
    },
    {
      label: 'Marketing',
      value: 'Marketing',
    },
    {
      label: 'Community Manager',
      value: 'Community Manager',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ];

  const onNext = async () => {
    await forceSave();
    setStep(6);
  };

  const onPrev = () => {
    setStep(4);
  };

  return (
    <>
      <StepTemplate
        currentStep={5}
        onNext={onNext}
        onPrevious={onPrev}
        title={"Who's Who in Your Crew"}
        description={
          'It takes a village to raise a project. Spotlight every villager, big or small.'
        }
      >
        <div className="flex flex-col">
          <InputContainer className="pb-8">
            <InputLabel>Add Team Members</InputLabel>
            <ul className="flex w-full flex-col">
              <AnimatePresence initial={false}>
                {' '}
                {fields.map((item, index) => {
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.15 },
                        height: { duration: 0.3 },
                        type: 'spring',
                        bounce: 0.15,
                        duration: 0.3,
                      }}
                    >
                      {' '}
                      <div className="flex gap-2 py-1">
                        <Controller
                          name="team"
                          control={control}
                          render={({ field }) => (
                            <AsyncSelect
                              loadOptions={async (inputValue) => {
                                if (!inputValue) return;
                                const res = (await axios.get(
                                  `/api/project/searchTeammate?username=${inputValue}`,
                                )) as AxiosResponse<ApiResponseType, any>;
                                const data = res.data.result as SearchResults[];
                                return data.map((item) => {
                                  return {
                                    label: item.username,
                                    value: item.id,
                                    icon: item.profilePicture,
                                  };
                                });
                              }}
                              size="md"
                              placeholder="Search Username"
                              onChange={(e) => {
                                if (!e) return;
                                setValue(`team.${index}.name`, e as any);
                              }}
                              onInputChange={(e) => {
                                console.log('on search change - ', e);
                                setSearch(e);
                              }}
                              isMulti={false}
                              isSearchable={true}
                              options={[]}
                            />
                          )}
                        />{' '}
                        <div className="w-full max-w-32">
                          <Controller
                            render={({ field }) => (
                              <Select
                                placeholder="Token"
                                size="md"
                                onChange={(e) => {
                                  if (!e) return;
                                  setValue(`team.${index}.role`, e as any);
                                }}
                                isMulti={false}
                                isSearchable={false}
                                defaultValue={PositionsOption[0]}
                                options={PositionsOption}
                              />
                            )}
                            name={`team.${index}.role`}
                            control={control}
                          />
                        </div>
                        <Button
                          variant={'unStyled'}
                          onClick={(e) => {
                            e.preventDefault();
                            remove(index);
                          }}
                          className="w-10 bg-[var(--color-surface-negative-transparent)]"
                        >
                          <Icon
                            name="deleteDustbin2Filled"
                            height={24}
                            width={24}
                            color="var(--color-fg-negative-base)"
                          />
                        </Button>
                      </div>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
            <HelperText variant={'error'} show={errors.team ? true : false}>
              {errors.team?.message}
            </HelperText>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                append({ name: '', role: '' });
              }}
              className="w-full rounded-lg border border-dashed border-[var(--color-border-secondary)] p-3"
            >
              <Text className="l1 md:l2" color={'tertiary'}>
                Add Another Asset
              </Text>
            </button>
          </InputContainer>
        </div>
      </StepTemplate>
    </>
  );
};
