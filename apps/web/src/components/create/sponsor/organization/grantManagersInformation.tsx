import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { Controller, useFormContext } from 'react-hook-form';

import { ApiResponseType } from '@cubik/database/api';
import { AsyncSelect, HelperText, InputContainer, InputLabel } from '@cubik/ui';

interface SearchResults {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
}

const GrantManagersInformation = () => {
  const [search, setSearch] = useState<string>('');
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Render fields related to grant managers' information
  return (
    <AnimatePresence initial={false}>
      {!!watch('wantsSelfCustody') && !!watch('isSponsorshipPublic') && (
        <motion.div
          layout
          key="grant managers information"
          //className="border border-red-500"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            opacity: { duration: 0.15 },
            height: { duration: 0.3 },
            type: 'spring',
            bounce: 0.15,
            duration: 0.15,
          }}
        >
          <div className="flex w-full flex-col gap-8 pt-[24px] md:pt-[40px]">
            <InputContainer>
              <InputLabel
                id="name"
                infoText="This is the official name of your organization that will be used for sponsorship recognition."
              >
                Name
              </InputLabel>
              <Controller
                name="treasuryMangers"
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
                      setValue('treasuryMangers', e as any);
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
              />
              <HelperText show={!!errors.name} variant={'error'}>
                {errors.name && errors.name.message}
              </HelperText>
            </InputContainer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GrantManagersInformation;
