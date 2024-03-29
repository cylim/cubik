import { HtmlHTMLAttributes, Suspense } from 'react';
import { ProjectDrawerContent } from '@/app/projects/components/projectDrawerContent';

import { Button, Sheet, SheetContent, SheetTrigger } from '@cubik/ui';

interface DrawerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  slug: string;
  setOpenSlug: React.Dispatch<React.SetStateAction<string | null>>;
  openSlug: string | null;
}

export function ProjectDrawer({
  slug,
  openSlug,
  setOpenSlug,
  ...props
}: DrawerProps) {
  return (
    <Sheet
      onOpenChange={() => {
        if (openSlug) {
          setOpenSlug(slug);
        }
      }}
    >
      <SheetTrigger asChild>
        <Button leftIconName="chevronRight" variant={'outline'} size="md" />
      </SheetTrigger>
      <SheetContent className="pointer-events-auto overflow-x-scroll">
        <Suspense fallback="loading...">
          <ProjectDrawerContent slug={slug} />
        </Suspense>
        {/* {JSON.stringify(project.data)} */}
        {/* <SheetHeader>
          <div className="relative box-border flex w-full flex-col items-start justify-start px-6 pb-2 pt-0">
            <Image
              width={516}
              height={151}
              className="relative h-[151px] max-w-full shrink-0 self-stretch overflow-hidden rounded-xl object-cover"
              alt=""
              src={project?.slides[0]}
            />
            <div className="mt-[-60px] flex flex-row items-end justify-start self-stretch px-8 py-0">
              <Image
                width={90}
                height={90}
                className="relative h-[90px] w-[90px] rounded-lg object-cover"
                alt=""
                src={project?.logo}
              />
            </div>
          </div>
        </SheetHeader>
        <div className="relative px-6">
          <div className="flex flex-row gap-4">
            <Text className="text-xl font-bold">{project?.name}</Text>
            <Tag color="orange" variant="subtle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="#F47B3F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 8.094 7.338 9.43a8.563 8.563 0 0 1 2.604-2.82L10 6.57M14.167 8c0-.86-.53-1.606-1.318-2.01.277-.836.12-1.744-.487-2.352-.608-.607-1.516-.764-2.352-.487C9.613 2.363 8.86 1.833 8 1.833c-.86 0-1.606.53-2.003 1.318-.843-.277-1.751-.12-2.359.487-.607.608-.758 1.516-.48 2.353C2.367 6.394 1.832 7.14 1.832 8c0 .86.536 1.606 1.324 2.01-.277.836-.126 1.744.481 2.352.608.607 1.516.758 2.353.487.403.788 1.149 1.318 2.01 1.318.86 0 1.612-.53 2.009-1.318.836.27 1.744.12 2.352-.487.608-.608.764-1.516.487-2.353.788-.403 1.318-1.149 1.318-2.009Z"
                />
              </svg>
              <Text className="px-2 text-sm text-[#F47B3F]">
                {project?.status}
              </Text>
            </Tag>
          </div>
          <Text className="text-sm font-semibold">
            {project?.shortDescription}
          </Text>
          <div className="relative flex w-full flex-row items-end justify-start gap-[12px] py-3 text-left text-xs">
            <Link href={project?.projectLink}>
              <Button
                variant="secondary"
                className="relative font-semibold leading-[16px]"
              >
                View on Cubik
              </Button>
            </Link>
            <Link href={project?.projectLink}>
              <Button
                variant="secondary"
                className="w-dimensions-5 h-dimensions-5 relative shrink-0 overflow-hidden object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="#050505"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1.9 8h12.2M1.9 8A6.1 6.1 0 0 0 8 14.1M1.9 8A6.1 6.1 0 0 1 8 1.9M14.1 8A6.1 6.1 0 0 1 8 14.1M14.1 8A6.1 6.1 0 0 0 8 1.9m0 0A9.333 9.333 0 0 1 10.44 8 9.333 9.333 0 0 1 8 14.1M8 1.9A9.333 9.333 0 0 0 5.56 8 9.333 9.333 0 0 0 8 14.1"
                  />
                </svg>
              </Button>
            </Link>
            <Link href={project?.twitterHandle}>
              <Button
                variant="secondary"
                className="w-dimensions-5 h-dimensions-5 relative shrink-0 overflow-hidden object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  fill="none"
                  viewBox="0 0 13 14"
                >
                  <path
                    stroke="#050505"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.2 1 7.054 5.737M.699 13 5.12 7.947m1.935-2.21L4.178 1.675c-.175-.247-.263-.37-.376-.46a1 1 0 0 0-.337-.174C3.326 1 3.175 1 2.872 1H1.746c-.5 0-.75 0-.885.104a.5.5 0 0 0-.194.376c-.007.17.138.374.427.782L5.12 7.947m1.935-2.21 4.25 6c.29.409.434.613.427.783a.5.5 0 0 1-.194.376c-.135.104-.385.104-.886.104H9.527c-.303 0-.455 0-.593-.04a1 1 0 0 1-.337-.175c-.113-.09-.2-.213-.376-.46l-3.1-4.378"
                  />
                </svg>
              </Button>
            </Link>
            <Link href={project?.githubLink}>
              <Button
                variant="secondary"
                className="w-dimensions-5 h-dimensions-5 relative shrink-0 overflow-hidden object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="#050505"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.667 10A2.48 2.48 0 0 0 6 11.72V14m3.333-4A2.48 2.48 0 0 1 10 11.72V14m-4-1.3a3.8 3.8 0 0 1-1.88.24c-1.013-.347-.747-1.267-1.267-1.647A1.58 1.58 0 0 0 2 11m10.667-4.5c0 2-1.3 3.5-4.667 3.5S3.333 8.5 3.333 6.5a4.2 4.2 0 0 1 .454-2c-.227-.98-.14-2.187.346-2.427.487-.24 1.514.2 2.36.767A8.574 8.574 0 0 1 8 2.706a8.573 8.573 0 0 1 1.507.12c.846-.566 1.92-.986 2.36-.766.44.22.573 1.446.346 2.426a4.2 4.2 0 0 1 .454 2.014Z"
                  />
                </svg>
              </Button>
            </Link>
          </div>
          <div className="text-body-body-fg-primary font-desktop-l3-l3-primary-light relative flex w-full flex-col items-start justify-start gap-[24px] text-left text-base">
            <div className="flex flex-row items-center justify-start self-stretch">
              <div className="flex flex-col px-3">
                <div className="font-semibold leading-[24px]">Team</div>
                <div className="flex flex-row flex-wrap items-start justify-start gap-3">
                  {project?.team.map((member) => {
                    return (
                      <div
                        key={member.user.id}
                        className="box-border flex max-w-[200px] p-2"
                      >
                        <AvatarLabelGroup
                          size="sm"
                          shape="circle"
                          avatarSrc={member.user.profilePicture}
                          title={`@${member.user.username}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="py-3">
                  <Text className="font-semibold leading-[24px]">Tags</Text>
                  <div className="flex flex-row flex-wrap gap-3 md:gap-4">
                    {project?.industry?.map((tag, idx) => {
                      return (
                        <div
                          key={idx}
                          className="w-fit rounded-lg bg-[#FFFFFF] px-4 py-3"
                        >
                          <Text className="l1 md:l2" color={'primary'}>
                            {tag}
                          </Text>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Text className="font-semibold leading-[24px]">
                    Project Details
                  </Text>
                  <Text>{project.longDescription}</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter className="py-3">
          <Button
            onClick={async () => {
              toast.success(`Declined ${project.name}`);
              await updateProjectState(project.id, ProjectVerifyStatus.FAILED);
            }}
            className="w-full"
            variant="success"
          >
            Decline
          </Button>
          <Button
            onClick={async () => {
              toast.success(`Accepted ${project.name}`);
              await updateProjectState(
                project.id,
                ProjectVerifyStatus.VERIFIED,
              );
            }}
            className="w-full"
            variant="danger"
          >
            Accept
          </Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
