import { EventType } from "@cubik/database";

export interface Slides {
  slide: string[];
}

export interface ProjectSocials {
  github: string;
  discord: string;
  telegram: string;
}

export type ProjectPageEventType = {
  eventId: string;
  joinId: string;
  type: EventType;
  name: string;
};