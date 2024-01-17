import { EventType, Prisma } from '@cubik/database';

export interface Slides {
  slide: string[];
}

export interface ProjectSocials {
  github: string;
  discord: string;
  telegram: string;
}

// export interface ProjectFormData {
//   name: string;
//   tagline: string;
//   email: string;
//   category: string[];
//   logo: string;
//   description: string;
//   slides: string[];
//   team: string[];
//   github: string;
//   website: string;
//   twitter: string;
//   isOpenSource: boolean;
// }

type User = {
  id: string;
  profilePicture: string;
  username: string;
};
export type Team = {
  id: string;
  user: User;
};
export interface IProjectData {
  id: string;
  name: string;
  discordLink: string;
  githubLink: string;
  email: string;
  shortDescription: string;
  logo: string;
  longDescription: string;
  slides: string[];
  projectLink: string;
  industry: string;
  status: string;
  telegramLink: string;
  isOpenSource: boolean;
  twitterHandle: string;
  team: Team[];
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
export type ProjectPageEventType = {
  eventId: string;
  joinId: string;
  type: EventType;
  name: string;
};
