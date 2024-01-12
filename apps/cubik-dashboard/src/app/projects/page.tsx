'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProjectDrawer } from '@/app/projects/components/projectDrawer';
import { ProjectCardSkeleton } from '@/app/projects/components/Skeleton';
import useProjects from '@/hooks/projects/useProjects';
import { toast } from 'sonner';

import { ProjectVerifyStatus } from '@cubik/database';
import dayjs from '@cubik/dayjs';
import {
  AvatarLabelGroup,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLeftElement,
  PaginationButton,
  SegmentContainer,
  SegmentItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@cubik/ui';

const toastMessages: Record<ProjectVerifyStatus, string> = {
  [ProjectVerifyStatus.REVIEW]: 'Showing pending projects',
  [ProjectVerifyStatus.VERIFIED]: 'Showing accepted projects',
  [ProjectVerifyStatus.FAILED]: 'Showing rejected projects',
};

const sectionNames: Record<ProjectVerifyStatus, string> = {
  [ProjectVerifyStatus.REVIEW]: 'Pending',
  [ProjectVerifyStatus.VERIFIED]: 'Accepted',
  [ProjectVerifyStatus.FAILED]: 'Rejected',
};

interface Props {
  searchParams: {
    status: ProjectVerifyStatus;
    page: number;
  };
}

function isUrlFromDomain(url: string, domain: string): boolean {
  // Create a regular expression pattern to match the domain
  const domainPattern = new RegExp(
    `^https?://${domain.replace('.', '\\.')}`,
    'i',
  );

  // Test if the URL matches the domain pattern
  return domainPattern.test(url);
}

const ProjectPage = ({ searchParams }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState<ProjectVerifyStatus>(
    searchParams.status || ProjectVerifyStatus.REVIEW,
  );
  const [searchBoxState, setSearchBoxState] = useState<string>('');
  const projects = useProjects({
    page: searchParams.page || 1,
    limit: 10,
    projectStatus: selectedStatus,
    ...(searchBoxState !== '' && { search: searchBoxState }),
  });
  const router = useRouter();
  console.log(selectedStatus);
  console.log(searchParams);

  const _projects = projects.data?.pages.flatMap((page) => page.projects);
  const states = Object.values(ProjectVerifyStatus);

  console.log(projects);
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
      <div>
        <Text color="primary" className="h5 pb-5">
          All Projects
        </Text>
        <div className="flex w-full flex-row place-items-stretch justify-between gap-x-14">
          <div className="max-w-sm">
            <SegmentContainer size="sm">
              {states.map((state) => {
                return (
                  <SegmentItem
                    key={state}
                    onClick={() => {
                      console.log(state);
                      setSelectedStatus(state);
                      projects.refetch();
                      router.push(`/projects?status=${state}`, {
                        scroll: false,
                      });
                      toast.success(toastMessages[state]);
                    }}
                    isActive={state === selectedStatus}
                  >
                    <Text className="w-full">{sectionNames[state]}</Text>
                  </SegmentItem>
                );
              })}
            </SegmentContainer>
          </div>
          <div>
            <InputContainer inputVariant="sm">
              <InputFieldContainer isDisabled={false} variant="md">
                <InputLeftElement withBorder={false}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    fill="none"
                    viewBox="0 0 15 16"
                  >
                    <path
                      stroke="#0D0D0D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.25 14.75-4.538-4.538m0 0a5.25 5.25 0 1 0-7.425-7.425 5.25 5.25 0 0 0 7.425 7.425Z"
                    />
                  </svg>
                </InputLeftElement>
                <InputField
                  id="search-box"
                  name="search-box"
                  placeholder="Search"
                  type="text"
                  value={searchBoxState}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchBoxState(e.target.value)
                  }
                />
              </InputFieldContainer>
            </InputContainer>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <Table>
            <TableHeader>
              <TableHead>
                <Text>Projects</Text>
              </TableHead>
              <TableHead>
                <Text>Project Link</Text>
              </TableHead>
              <TableHead>
                <Text>Creator</Text>
              </TableHead>
              <TableHead>
                <Text>Time</Text>
              </TableHead>
              <TableHead></TableHead>
            </TableHeader>
            <TableBody>
              {projects.isSuccess ? (
                _projects?.map((project) => {
                  const isImageDelivery = isUrlFromDomain(
                    project.logo,
                    'imagedelivery.net',
                  );
                  return (
                    <TableRow key={project.id}>
                      <TableCell>
                        <AvatarLabelGroup
                          size="sm"
                          description={project.email}
                          title={project.name}
                          shape="circle"
                          avatarSrc={
                            isImageDelivery
                              ? project.logo
                              : 'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public'
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <a href={project.projectLink}>{project.projectLink}</a>
                      </TableCell>
                      <TableCell>
                        <AvatarLabelGroup
                          size="sm"
                          shape="circle"
                          title={`@${project.owner.username}`}
                          description={
                            project.owner.mainWallet.slice(0, 6) +
                            '...' +
                            project.owner.mainWallet.slice(-4)
                          }
                          avatarSrc={
                            isImageDelivery
                              ? project.owner.profilePicture
                              : 'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public'
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Text>{dayjs(project.createdAt).fromNow()}</Text>
                      </TableCell>
                      <TableCell>
                        <ProjectDrawer project={project} />
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <>
                  <ProjectCardSkeleton size="md" />
                  <ProjectCardSkeleton size="md" />
                  <ProjectCardSkeleton size="md" />
                  <ProjectCardSkeleton size="md" />
                  <ProjectCardSkeleton size="md" />
                </>
              )}
            </TableBody>
          </Table>
        </div>
        {projects.isSuccess && (
          <div className="w-full border-t border-[var(--card-border-secondary)] px-6 py-4">
            <PaginationButton
              maxPage={Math.ceil(projects.data.pages[0].totalPages / 15)}
              route={`/projects?status=${selectedStatus}&page=`}
              page={searchParams.page || 1}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
