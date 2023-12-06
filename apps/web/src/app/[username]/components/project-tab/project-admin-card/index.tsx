import React from 'react';

import {
  AvatarLabelGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@cubik/ui';

const ProjectAdminCard = () => {
  return (
    <Card size="md">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <AvatarLabelGroup
            avatarSrc={
              'https://beta.cubik.so/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdo7tp4u57%2Fimage%2Fupload%2Fv1691136234%2Fecw9wjki4yt7cx1ekz6o.jpg&w=2048&q=75'
            }
            title={'Superteam Earn'}
            description="Get paid in crypto by participating in bounties and freelance opportunities from top Solana companies."
            size={'md'}
          />
        </div>
      </CardHeader>
      {/* <CardBody>World</CardBody> */}
      {/* <CardFooter>this is me</CardFooter> */}
    </Card>
  );
};

export default ProjectAdminCard;
