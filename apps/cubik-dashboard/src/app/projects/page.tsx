"use client";
import { ProjectCardSkeleton } from "@/app/projects/components/Skeleton";
import { ProjectDrawer } from "@/app/projects/components/projectDrawer";
import useProjects from "@/hooks/projects/useProjects";
import { ProjectVerifyStatus } from "@cubik/database";
import dayjs from "@cubik/dayjs";
import { AvatarLabelGroup, InputContainer, InputField, InputFieldContainer, PaginationButton, SegmentContainer, SegmentItem, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text } from "@cubik/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

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
    const domainPattern = new RegExp(`^https?://${domain.replace('.', '\\.')}`, 'i');

    // Test if the URL matches the domain pattern
    return domainPattern.test(url);
}


const ProjectPage = ({ searchParams }: Props) => {
    const [selectedStatus, setSelectedStatus] = useState<ProjectVerifyStatus>(searchParams.status || ProjectVerifyStatus.REVIEW);
    const [searchBoxState, setSearchBoxState] = useState<string>("");
    const projects = useProjects({
        page: searchParams.page || 1,
        limit: 10,
        projectStatus: selectedStatus,
        ...(searchBoxState !== "" && { search: searchBoxState })
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
                <Text color="primary" className="h3 pb-5">All Projects</Text>
                <div className="flex w-full flex-row justify-between gap-x-14">
                    <SegmentContainer size="sm">
                        {states.map((state) => {
                            return (
                                <SegmentItem
                                    key={state}
                                    onClick={() => {
                                        console.log(state);
                                        setSelectedStatus(state);
                                        projects.refetch();
                                        router.push(`/projects?status=${state}`, { scroll: false });
                                        toast.success(toastMessages[state]);
                                    }}
                                    isActive={state === selectedStatus}
                                >
                                    <Text className="w-full">{sectionNames[state]}</Text>
                                </SegmentItem>
                            )
                        })}
                    </SegmentContainer>
                    <div>
                        <InputContainer inputvariant='sm'>
                            <InputFieldContainer isDisabled={false} variant="md">
                                <InputField
                                    id="search-box"
                                    name="search-box"
                                    placeholder="Search"
                                    type="text"
                                    value={searchBoxState}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchBoxState(e.target.value)}
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
                            {projects.isSuccess ? _projects?.map((project) => {
                                const isImageDelivery = isUrlFromDomain(project.logo, 'imagedelivery.net');
                                return (
                                    <TableRow key={project.id}>
                                        <TableCell>
                                            <AvatarLabelGroup
                                                size="sm"
                                                description={project.email}
                                                title={project.name}
                                                avatarSrc={isImageDelivery ? project.logo : "https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public"} />
                                        </TableCell>
                                        <TableCell>
                                            <a href={project.projectLink}>{project.projectLink}</a>
                                        </TableCell>
                                        <TableCell>
                                            <AvatarLabelGroup
                                                size="sm"
                                                title={`@${project.owner.username}`}
                                                description={project.owner.mainWallet.slice(0, 6) + '...' + project.owner.mainWallet.slice(-4)}
                                                avatarSrc={isImageDelivery ? project.owner.profilePicture : "https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public"}
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
                            }) : (
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
    )
}

export default ProjectPage;