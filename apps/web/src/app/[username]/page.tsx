import type { Metadata } from 'next';

import { ProfileTabs } from './components/tabs';

interface Props {
  params: { username: string };
}
export const metadata: Metadata = {
  title: 'User - Cubik',
  description: 'Browse user and support there projects',
  openGraph: {
    images: [
      'https://res.cloudinary.com/demonicirfan/image/upload/v1692786112/OG-Grant_23_tbhrsg.png',
    ],
  },
  twitter: {
    title: 'Cubik',
    card: 'summary_large_image',
    images: [
      'https://res.cloudinary.com/demonicirfan/image/upload/v1692786112/OG-Grant_23_tbhrsg.png',
    ],
  },
};
const Details = ({ params: { username } }: Props) => {
  return (
    <>
      <ProfileTabs username={username} />
    </>
  );
};

export default Details;
