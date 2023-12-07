import React from 'react';

import {
  AvatarLabelGroup,
  Button,
  Icon,
  InputField,
  InputFieldContainer,
  InputLeftElement,
  SubHead,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@cubik/ui';

export const ContributorsTable = () => {
  return (
    <div className="bg-[var(--card-bg-primary)]">
      <div className="flex items-center justify-between p-5">
        <SubHead heading="All Contributors" />
        <div className="flex items-center justify-between gap-5">
          <InputFieldContainer variant={'md'}>
            <InputLeftElement withBorder={false}>
              <Icon name="search" />
            </InputLeftElement>
            <InputField placeholder="Search" />
          </InputFieldContainer>
          <Button
            className="w-60 px-3"
            variant="secondary"
            rightIconName="download"
          >
            Download CSV
          </Button>
        </div>
      </div>
      <Table className="">
        <TableHeader className="border-b border-[var(--card-border-secondary)]">
          <TableRow className="">
            <TableHead>
              <Text color={'secondary'}>User</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Amount Contributed</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Contribution Time</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Project</Text>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b border-[var(--card-border-secondary)]">
            <TableCell>
              <AvatarLabelGroup
                size="xs"
                title="dreader"
                avatarShape="square"
                avatarSrc={
                  'https://uploadthing.com/f/c2b1ffca-f2b6-433c-a126-72464f970a66_Screenshot%202023-08-22%20at%2012.02.18.png'
                }
              />
            </TableCell>
            <TableCell>
              <Text
                className="l2 text-[var(--avatar-label-title)]"
                color="inherit"
              >
                <AvatarLabelGroup
                  size="xs"
                  title="1M BONK"
                  avatarShape="circle"
                  description="$120"
                  avatarSrc={
                    'https://uploadthing.com/f/c2b1ffca-f2b6-433c-a126-72464f970a66_Screenshot%202023-08-22%20at%2012.02.18.png'
                  }
                />
              </Text>
            </TableCell>

            <TableCell>
              <Text
                className="l3 text-[var(--avatar-label-title)]"
                color="tertiary"
              >
                Just Now
              </Text>
            </TableCell>

            <TableCell className="flex items-center justify-center">
              <Icon
                name="chevronDown"
                className="stroke-[var(--color-neutral-700)]"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
