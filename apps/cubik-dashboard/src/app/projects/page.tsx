"use client";
import useProjects from "@/hooks/projects/useProjects";
import { ProjectVerifyStatus } from "@cubik/database";
import { ProjectCard, SegmentContainer, SegmentItem, Text } from "@cubik/ui";
import { useState } from "react";
import { toast } from "sonner";

function isUrlFromDomain(url: string, domain: string): boolean {
    // Create a regular expression pattern to match the domain
    const domainPattern = new RegExp(`^https?://${domain.replace('.', '\\.')}`, 'i');

    // Test if the URL matches the domain pattern
    return domainPattern.test(url);
}

const ProjectPage = () => {
    const [selectedStatus, setSelectedStatus] = useState<ProjectVerifyStatus>(ProjectVerifyStatus.REVIEW);
    const projects = useProjects({
        page: 1,
        limit: 10,
        projectStatus: selectedStatus,
    });

    console.log(selectedStatus);

    const _projects = projects.data?.pages.flatMap((page) => page.projects);
    const states = Object.values(ProjectVerifyStatus);

    console.log(projects);
    return (
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
            <div>
                <Text color="primary" className="h3 pb-5">All Projects</Text>
                <SegmentContainer size="sm">
                    {states.map((state) => {
                        return (
                            <SegmentItem
                                key={state}
                                onClick={() => {
                                    console.log(state);
                                    setSelectedStatus(state);
                                    projects.refetch();
                                    toast.success(`Showing ${state} projects`);
                                }}
                                isActive={state === selectedStatus}
                            >
                                <Text className="w-full">{state}</Text>
                            </SegmentItem>
                        )
                    })}
                </SegmentContainer>
                <div className="flex flex-col gap-4 md:gap-8">
                    {projects.isSuccess && _projects?.map((project) => {
                        const isImageDelivery = isUrlFromDomain(project.logo, 'imagedelivery.net');
                        return (
                            <ProjectCard
                                href={
                                    '/project/' +
                                    project.slug
                                }
                                //Button={<SaveButton />}
                                description={project.shortDescription}
                                name={project.name}
                                logo={isImageDelivery ? project.logo : "https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/81d956af-6d69-4346-3ef3-feb755f92a00/public"}
                                key={project.id}
                            >
                                <div className="flex flex-col gap-2">
                                    <Text
                                        className="h4 md:h5 line-clamp-1 "
                                        color={'primary'}
                                    >
                                        {project.name}
                                    </Text>
                                    <Text
                                        className="b3-light md:b4-light line-clamp-2 "
                                        color="secondary"
                                    >
                                        {project.shortDescription}
                                    </Text>
                                </div>
                            </ProjectCard>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;