'use client';

import React from 'react';
import { AccessStore } from '@/hooks/store/scope';
import { useUser } from '@/hooks/store/user';
import { updateScope } from '@/utils/helpers/updateScope';

import { AccessScope } from '@cubik/common-types/src/admin';
import {
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ProjectTimelineCard,
  Text,
} from '@cubik/ui';

export const EventHeader = () => {
  const { scope, setAccessScope } = AccessStore();
  const { user } = useUser();
  const handleScopeChange = (scope: AccessScope) => {
    setAccessScope(scope);
    updateScope(scope);
  };
  return (
    <>
      <div className="flex w-full items-center justify-center bg-[var(--body-surface)]">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-start gap-12 px-4 py-12 md:px-8">
          <Menu>
            <MenuButton>
              <div className="flex items-center justify-start gap-3 ">
                <Text color={'primary'} className="h5">
                  {scope?.event_name}
                </Text>
                <Icon name={'chevronDown'} />
              </div>
            </MenuButton>
            <MenuList>
              {user?.accessScope.map((scope) => (
                <MenuItem
                  onClick={() => handleScopeChange(scope)}
                  key={scope.event_id}
                  text={scope.event_name}
                />
              ))}
            </MenuList>
          </Menu>
          <ProjectTimelineCard
            subElement={
              <>
                <Text className="l2" color={'tertiary'}>
                  Round ends in 5 Days
                </Text>
              </>
            }
            date={new Date()}
            type="Voting"
          />
        </div>
      </div>
    </>
  );
};
