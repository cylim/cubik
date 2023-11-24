import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { utils } from '@coral-xyz/anchor';

import { prisma } from '@cubik/database';

import { ProjectTabs } from '../components/ProjectTabs';

interface OgProps {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata(
  { params }: OgProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  let contributors = 0;
  let eventName = undefined;
  const project = await prisma.project.findFirst({
    where: {
      slug: params.slug,
    },
    select: {
      name: true,
      shortDescription: true,
      logo: true,
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

  const newImage = `/api/og?name=${utils.bytes.base64.encode(
    Buffer.from(project?.name ?? 'default'),
  )}&tagline=${utils.bytes.base64.encode(
    Buffer.from(project?.shortDescription ?? 'default'),
  )}&logo=${utils.bytes.base64.encode(
    Buffer.from(project?.logo ?? 'default'),
  )}&contributors=${contributors}&comments=${project?._count
    .comments}&eventName=${eventName}`;

  const previousImages = (await parent)?.openGraph?.images ?? [];

  return {
    title: project?.name,
    description: project?.shortDescription,
    metadataBase: new URL('https://www.cubik.so'),
    openGraph: {
      type: 'website',
      images: [`${newImage}`, ...previousImages],
      title: project?.name,
      description: project?.shortDescription,
    },
    twitter: {
      card: 'summary_large_image',
      images: [`${newImage}`, ...previousImages],
      title: project?.name,
      description: project?.shortDescription,
    },
  };
}

interface Props {
  params: { slug: string };
}

const ProjectPage = async ({ params: { slug } }: Props) => {
  return (
    <>
      <ProjectTabs slug={slug} />
    </>
  );
};

export default ProjectPage;
