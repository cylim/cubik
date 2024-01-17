import React from 'react';

import { CustomModal } from './moda';

interface Props {
  params: {
    slug: string;
  };
}
const ProjectPageDrawer = ({ params }: Props) => {
  console.log('--------------');
  console.log('--------------');
  console.log('--------------');
  console.log(params.slug);
  console.log('--------------');
  console.log('--------------');
  return (
    <CustomModal>
      <>sadfdsa</>
    </CustomModal>
  );
};

export default ProjectPageDrawer;
