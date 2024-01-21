'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  Icon,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLeftElement,
} from '@cubik/ui';

export const ProjectSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  return (
    <InputContainer inputVariant="sm">
      <InputFieldContainer isDisabled={false} size="md">
        <InputLeftElement>
          <Icon
            name="search"
            color="var(--form-input-fg-default)"
            className="h-6 w-6"
          />
        </InputLeftElement>
        <InputField
          id="search-box"
          name="search-box"
          placeholder="Search"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value !== '') {
              return router.push(
                `/projects?status=${searchParams.get('status')}&search=${
                  e.target.value
                }`,
                {
                  scroll: false,
                },
              );
            }
            return router.push(
              `/projects?status=${searchParams.get('status')}`,
              {
                scroll: false,
              },
            );
          }}
        />
      </InputFieldContainer>
    </InputContainer>
  );
};
