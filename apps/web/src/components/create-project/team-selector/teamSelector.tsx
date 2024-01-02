import React, { useEffect, useState } from 'react';
import { ProjectFormData } from '@/components/create-project';
import axios, { AxiosResponse } from 'axios';
import { UseFormReturn } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';

import { ApiResponseType } from '@cubik/database/api';
import {
  Icon,
  InputField,
  InputFieldContainer,
  SearchSelect,
  Text,
} from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
}

interface SearchResults {
  id: string;
  username: string;
}

interface TeamSelectorInputProps {
  id: string;
  onInputRemove: (index: string) => void;
}
const TeamSelectorInput = ({ id, onInputRemove }: TeamSelectorInputProps) => {
  const [searchResult, setSearchResult] = useState<SearchResults[]>([]);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const handleSearch = async () => {
      if (search.length > 3) return;
      const res = (await axios.get(
        `/api/project/searchTeammate?username=${search}`,
      )) as AxiosResponse<ApiResponseType, any>;
      const data = res.data.result as SearchResults[];
      setSearchResult(data);
    };
    handleSearch();
  }, [search]);

  //   return <div onClick={() => onInputRemove(id)}>Team {id}</div>;

  return (
    <SearchSelect
      placeholder="username"
      isMulti={true}
      onChange={(e) => {}}
      value={[]}
      onInputChange={(e) => {
        setSearch(e);
      }}
      options={
        searchResult.map((user) => {
          return { label: user.username, value: user.id };
        }) as any
      }
    />
  );
};
export const TeamSelector = ({ projectForm }: Props) => {
  const [selectedUser, setSelectedUser] = useState();
  const [member, setMember] = useState<string[]>(
    projectForm.getValues('team').length === 0
      ? [uuidV4()]
      : projectForm.getValues('team'),
  );
  //   const newArray = new Array(addMember).fill(0);
  const onInputRemove = (removeId: string) => {
    setMember((prev) => prev.filter((id) => id !== removeId));
    // setAddMember((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-3">
      {member.map((id) => {
        return (
          <TeamSelectorInput onInputRemove={onInputRemove} id={id} key={id} />
        );
      })}
      <div
        onClick={() => setMember((prev) => [...prev, uuidV4()])}
        className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border  border-dashed border-[var(--color-border-secondary)]"
      >
        <Text color={'secondary'} className="b4-light">
          Add Another member
        </Text>
        <Icon
          name="plus"
          className="h-4 w-4 stroke-[var(--color-border-secondary)]"
        />
      </div>
    </div>
  );
};
