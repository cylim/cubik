import React from 'react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { SelectionSection } from '@/app/create/project/components/selectionSection';
import { CreateProject } from '@/components/create-project/createProject';
import { validate } from 'uuid';

interface Props {
  searchParams: {
    id: string;
  };
}

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
