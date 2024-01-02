import { Prisma } from '@cubik/database';

export interface Slides {
  slide: string[];
}

export interface ProjectSocials {
  github: string;
  discord: string;
  telegram: string;
}

export interface ProjectFormData {
  name: string;
  tagline: string;
  email: string;
  category: string[];
  logo: string;
  description: string;
  slides: string[];
  team: string[];
  github: string;
  website: string;
  twitter: string;
  isOpenSource: boolean;
  progress: number;
}

export type ProjectData = Prisma.ProjectGetPayload<{
  select: {
    id: true;
    name: true;
    discordLink: true;
    githubLink: true;
    email: true;
    shortDescription: true;
    logo: true;
    longDescription: true;
    slides: true;
    projectLink: true;
    industry: true;
    status: true;
    telegramLink: true;
    isOpenSource: true;
    twitterHandle: true;
    team: {
      select: {
        id: true;
        user: {
          select: {
            id: true;
            username: true;
            profilePicture: true;
          };
        };
      };
    };
  };
}>;
