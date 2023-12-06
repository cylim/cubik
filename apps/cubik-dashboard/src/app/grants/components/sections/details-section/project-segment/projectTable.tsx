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

export const ProjectTable = () => {
  return (
    <div className="bg-[var(--card-bg-primary)]">
      <div className="flex items-center justify-between p-5">
        <SubHead heading="All Projects" />
        <div className="flex items-center justify-between gap-5 border">
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
            <TableHead className="w-10"></TableHead>
            <TableHead>
              <Text color={'secondary'}>Projects</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Contributors</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Contributions</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Matching</Text>
            </TableHead>
            <TableHead>
              <Text color={'secondary'}>Progress</Text>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b border-[var(--card-border-secondary)]">
            <TableCell className="">1</TableCell>
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
            <TableCell>134</TableCell>
            <TableCell>134</TableCell>
            <TableCell>
              <Text
                className="l2 text-[var(--avatar-label-title)]"
                color="inherit"
              >
                $47,889
              </Text>
              <Text
                className="l3 text-[var(--avatar-label-title)]"
                color="tertiary"
              >
                47%
              </Text>
            </TableCell>
            <TableCell>
              <div className="h-10 w-full bg-red-500"></div>
            </TableCell>
            <TableCell className="flex items-center justify-center">
              <Icon
                name="chevronDown"
                className="stroke-[var(--color-neutral-700)]"
              />
            </TableCell>
          </TableRow>
          <TableRow className="border-b border-[var(--card-border-secondary)]">
            <TableCell className="">1</TableCell>
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
            <TableCell>134</TableCell>
            <TableCell>134</TableCell>
            <TableCell>
              <Text
                className="l2 text-[var(--avatar-label-title)]"
                color="inherit"
              >
                $47,889
              </Text>
              <Text
                className="l3 text-[var(--avatar-label-title)]"
                color="tertiary"
              >
                47%
              </Text>
            </TableCell>
            <TableCell>
              <div className="h-10 w-full bg-red-500"></div>
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
