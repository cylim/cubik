import React from 'react';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { SelectionSection } from '@/app/create/project/components/selectionSection';
import { CreateProject } from '@/components/create-project/createProject';
import { validate } from 'uuid';

import { Metadata } from 'next';

interface Props {
  searchParams: {
    id: string;
  };
}

export const generateMetadata = async ({
  searchParams: { id },
}: Props): Promise<Metadata> => {
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      shortDescription: true,
    },
  });
  return {
    title: `Create Project - ${project?.name}`,
    description: `Create a project on Cubik`,
    openGraph: {
      title: `Create Project - ${project?.name}`,
      description: project?.shortDescription || `Create a project on Cubik`,
      images: [
        {
          url: 'https://picsum.photos/1200/630',
          width: 1200,
          height: 630,
          alt: `Create Project - ${id}`,
        },
      ],
    },
    keywords: `cubik, project, create, ${id}`,
  };
};

const ProjectPage = ({ searchParams }: Props) => {
  const selectedId = searchParams.id;
  const authToken = cookies().get('authToken');

  const isValidId = validate(selectedId);

  // checks if the user is logged in
  if (!authToken) {
    notFound();
  }

  // checks if the user has selected a category
  if (!selectedId) {
    return <SelectionSection />;
  }

  // checks if the selected id is valid uuid
  if (!isValidId) {
    return <SelectionSection />;
  }

  // create project page
  return <CreateProject id={selectedId} />;
};
export default ProjectPage;
