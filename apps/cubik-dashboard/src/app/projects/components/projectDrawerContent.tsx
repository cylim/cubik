import React from 'react';
import { getProject } from '@/app/projects/components/getProject';
import { useQuery } from '@tanstack/react-query';

interface Props {
  slug: string;
}

export const ProjectDrawerContent = async ({ slug }: Props) => {
  const project = useQuery({
    queryKey: ['project', slug],
    queryFn: () => getProject(slug),
  });
  return <div>{JSON.stringify(project.data)}</div>;
};
