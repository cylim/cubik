import type { Metadata, ResolvingMetadata } from 'next';

import { prisma } from '@cubik/database';

import { ProfileTabs } from './components/tabs';

interface Props {
  params: { username: string };
}
export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const user = await prisma.user.findFirst({
    where: {
      username: params.username,
    },
    select: {
      username: true,
    },
  });

  const title = `${user?.username} - Cubik`;
  const description = `Browse ${user?.username}'s and support their projects`;

  return {
    title: title,
    description: description,
    metadataBase: new URL('https://www.cubik.so'),
    openGraph: {
      type: 'website',
      images: [
        'https://res.cloudinary.com/demonicirfan/image/upload/v1692786112/OG-Grant_23_tbhrsg.png',
      ],
      title: title,
      description: description,
    },
    twitter: {
      card: 'summary_large_image',
      images: [
        'https://res.cloudinary.com/demonicirfan/image/upload/v1692786112/OG-Grant_23_tbhrsg.png',
      ],
      title: title,
      description: description,
    },
  };
}

const Details = ({ params: { username } }: Props) => {
  return (
    <>
      <ProfileTabs username={username} />
    </>
  );
};

export default Details;
