import { notFound } from 'next/navigation';

import { prisma } from '@cubik/database';

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
  console.log(username);
  const profile = await getProfile(username);

  if (!profile) {
    return notFound();
  }

  return (
    <div>
      <div>
        {username}
        {children}
      </div>
    </div>
  );
};

export default Profile;
