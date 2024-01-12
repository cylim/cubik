import React from 'react';

import { ProjectPageTemp } from './components/Temp';

interface Props {
  searchParams: any;
}
const ProjectPage = ({ searchParams }: Props) => {
  return (
    <>
      <ProjectPageTemp searchParams={searchParams} />
    </>
  );
};
export default ProjectPage;
