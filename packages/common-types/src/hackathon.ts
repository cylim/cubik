export interface HackathonHost {
  name: string;
  wallet: string;
  avatar: string;
}

export type HackathonSchedule = {
  index: number;
  name: string;
  start?: Date;
  end?: Date;
}[];

export interface HackathonPrize {
  name: string;
  logo: string;
  amount: number;
}
export interface HackathonPoolSponsors {
  name: string;
  logo: string;
  amount: number;
}
export interface HackathonSponsor {
  name: string;
  logo: string;
}

export interface HackathonLinks {
  title: string;
  link: string;
}

export interface HackathonTracks {
  id: string;
  name: string;
  prizeWorth: number;
  sponsor: HackathonSponsor[];
  prizeUnit: string;
  description: string;
  ideas: string[];
  judges: string[];
  links: HackathonLinks[];
}

export interface HackathonSocial {
  type: 'TWITTER' | 'DISCORD' | 'GITHUB' | 'LINKEDIN' | 'OTHER';
  icon_link: string;
  link: string;
}
