import React, { useEffect, useState } from 'react';
import { Option, ProjectFormData } from '@/components/create-project';
import axios, { AxiosResponse } from 'axios';
import { UseFormReturn } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';

import { ApiResponseType } from '@cubik/database/api';
import { Icon, SearchSelect, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
}

interface SearchResults {
  id: string;
  username: string;
}

interface TeamSelectorInputProps {
  id: string;
  onInputRemove: (removeId: string) => void;
  setTeam: (
    team: {
      label: string;
      value: string;
    }[],
    id: string,
  ) => void;
  inputValue: Option | undefined;
  selectedOptions: Option[];
}
const TeamSelectorInput = ({
  id,
  onInputRemove,
  setTeam,
  inputValue,
  selectedOptions,
}: TeamSelectorInputProps) => {
  const [searchResult, setSearchResult] = useState<SearchResults[]>([]);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const handleSearch = async () => {
      if (!search || search.length < 3) return;
      const res = (await axios.get(
        `/api/project/searchTeammate?username=${search}`,
      )) as AxiosResponse<ApiResponseType, any>;
      const data = res.data.result as SearchResults[];
      setSearchResult(data);
    };
    handleSearch();
  }, [search]);

  return (
    <div className="flex w-full items-center gap-1">
      <SearchSelect
        placeholder="username"
        isMulti={false}
        onChange={(e) => {
          const value = e as unknown as {
            label: string;
            value: string;
          }[];
          setTeam(value, id);
        }}
        value={inputValue ? [inputValue as any] : []}
        onInputChange={(e) => {
          setSearch(e);
        }}
        options={
          searchResult.map((user) => {
            return {
              label: user.username,
              value: user.id,
              disabled: selectedOptions.find((mem) => mem.value === user.id)
                ? true
                : false,
            };
          }) as any
        }
      />
      <div className="cursor-pointer" onClick={() => onInputRemove(id)}>
        <Icon className="stroke-[var(--form-helper-error)]" name="delete" />
      </div>
    </div>
  );
};
export const TeamSelector = ({ projectForm }: Props) => {
  const [member, setMember] = useState<Option[]>(
    projectForm.getValues('team').length === 0 ? [] : projectForm.watch('team'),
  );
  const onInputRemove = (removeId: string) => {
    projectForm.setValue(
      'team',
      projectForm.getValues('team').filter((mem) => mem.inputId !== removeId),
    );
    setMember((prev) => prev.filter((mem) => mem.inputId !== removeId));
  };

  const setTeam = (team: { label: string; value: string }[], id: string) => {
    const currentTeam = projectForm.getValues('team');
    console.log(currentTeam.length === 1, currentTeam[0].inputId === id);
    if (currentTeam.length === 1 && currentTeam[0].inputId) {
      const teamValue = [
        {
          label: team[0].label,
          value: team[0].value,
          inputId: id,
        },
      ];
      projectForm.setValue('team', teamValue);
    } else {
      const teamValue = currentTeam.filter((mem) => {
        if (mem.inputId !== id) {
          return mem;
        }
      });
      projectForm.setValue('team', [
        ...teamValue,
        { label: team[0].label, value: team[0].value, inputId: id },
      ]);
    }
  };
  return (
    <div className="flex flex-col gap-3">
      {member.map((id) => {
        return (
          <TeamSelectorInput
            selectedOptions={projectForm.watch('team')}
            inputValue={projectForm
              .watch('team')
              .find((mem) => mem.inputId === id.inputId)}
            setTeam={setTeam}
            onInputRemove={onInputRemove}
            id={id.inputId}
            key={id.value}
          />
        );
      })}
      <div
        onClick={() => {
          const id = uuidV4();
          setMember((prev) => [...prev, { inputId: id }]);
          projectForm.setValue('team', [
            ...projectForm.watch('team'),
            { inputId: id },
          ]);
        }}
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
