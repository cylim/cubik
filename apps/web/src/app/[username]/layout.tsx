import { notFound } from 'next/navigation';

import { prisma } from '@cubik/database';
import { ProfileCard } from '@cubik/ui';

const getProfile = async (username: string) => {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
    select: {
      profilePicture: true,
      mainWallet: true,
      profileNft: true,
    },
  });
};

const Profile = async ({
  params: { username },
  children,
}: {
  params: { username: string };
  children: React.ReactNode;
}) => {
  const profile = await getProfile(username);

  if (!profile) {
    return notFound();
  }

  return (
    <div>
      <ProfileCard
        avatar={profile.profilePicture ?? ''}
        title={username}
        description="dhruv.sol"
      />
      {children}
    </div>
  );
};

export default Profile;
