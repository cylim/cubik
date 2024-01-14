'use client';

import React, { useState } from 'react';
import { ProjectDrawer } from '@/app/projects/components/projectDrawer';
import { ProjectAdminList } from '@/hooks/projects/useProjects';
import { ColumnDef } from '@tanstack/react-table';

import { ProjectVerifyStatus } from '@cubik/database';
import dayjs from '@cubik/dayjs';
import {
  AvatarLabelGroup,
  Checkbox,
  CubikTable,
  PaginationButton,
  Text,
} from '@cubik/ui';

type tData = {
  id: string;
  project: {
    avatar: string;
    name: string;
    contactEmail: string;
    slug: string | null;
  };
  owner: {
    id: string;
    userName: string;
    icon: string;
    mainWallet: string;
  };
  url: string;
};

export const ProjectsDashboardTable = ({
  projects,
  totalPage,
  currentPage,
  status,
}: {
  projects: ProjectAdminList[];
  totalPage: number;
  currentPage: number;
  status: ProjectVerifyStatus;
}) => {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const data: tData[] = projects?.map((project: ProjectAdminList) => {
    return {
      id: project.id,
      project: {
        avatar: project.logo,
        name: project.name,
        contactEmail: project.email,
        slug: project.slug,
      },
      url: project.projectLink,
      owner: {
        id: project.owner.id,
        userName: project.owner.username,
        icon: project.owner.profilePicture,
        mainWallet: project.owner.mainWallet,
      },
      time: project.createdAt,
      slug: project.slug,
    };
  });
  const columns: ColumnDef<tData>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
            row.getIsSelected()
              ? console.log('is row selected', row)
              : console.log('not selected');
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'project',
      header: 'Project',
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-4">
            <AvatarLabelGroup
              size="md"
              avatarSrc={(row.getValue('project') as { avatar: string }).avatar}
            >
              <Text className="b3" color={'primary'}>
                {(row.getValue('project') as { name: string }).name}
              </Text>
              <Text className="l3-light" color="secondary">
                {
                  (row.getValue('project') as { contactEmail: string })
                    .contactEmail
                }
              </Text>
            </AvatarLabelGroup>
          </div>
        );
      },
    },
    {
      accessorKey: 'owner',
      header: 'Creator',
      cell: ({ row }) => {
        return (
          <AvatarLabelGroup
            size="sm"
            avatarSrc={(row.getValue('owner') as { icon: string }).icon}
            shape="circle"
            title={(row.getValue('owner') as { userName: string }).userName}
          />
        );
      },
    },
    {
      accessorKey: 'url',
      header: 'Link',
      cell: ({ row }) => {
        let trimmedUrl = (row.getValue('url') as string)
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '');
        let domain = trimmedUrl.split('/')[0];
        return (
          <Text className="l1" color="info">
            {domain}
          </Text>
        );
      },
    },
    {
      accessorKey: 'time',
      header: 'Time',
      cell: ({ row }) => {
        return (
          <Text className="l1" color="primary">
            {dayjs(row.getValue('time')).fromNow()}
          </Text>
        );
      },
    },
    {
      accessorKey: 'slug',
      header: '',
      cell: ({ row }) => {
        return (
          <div className="flex justify-center">
            <ProjectDrawer
              openSlug={openSlug}
              setOpenSlug={setOpenSlug}
              slug={row.getValue('slug')}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <CubikTable data={data} columns={columns} />
      <div className="w-full border-t border-[var(--card-border-secondary)] px-6 py-4">
        <PaginationButton
          maxPage={totalPage}
          route={`/projects?status=${status}&page=`}
          page={currentPage || 1}
        />
      </div>
    </div>
  );
};
