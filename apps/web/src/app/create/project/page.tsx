import React from 'react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { validate } from 'uuid';

import { Background } from '@cubik/ui';

import { CreateProject } from '../../../components/create/project';
import { SelectionSection } from './components/selectionSection';

interface Props {
  searchParams: {
    id: string;
  };
}

const ProjectPage = ({ searchParams }: Props) => {
  console.log('🔄 Parent rerender');
  const selectedId = searchParams.id;
  const authToken = cookies().get('authToken');

  const isValidId = validate(selectedId);

  // checks if the user is logged in
  if (!authToken || !isValidId) {
    notFound();
  }

  // create project page
  return (
    <>
      <div className="absolute top-0">
        <Background />
      </div>
      <CreateProject id={selectedId} />
    </>
  );
};
export default ProjectPage;
