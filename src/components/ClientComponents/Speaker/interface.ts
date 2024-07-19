import { BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";

export interface SpeakerInfo {
  name: string;
  numCourses: number;
  numLessons: number;
  avatar?: string;
}

export interface SpeakerLink extends SpeakerInfo {
  to: string;
}

export interface SpeakerInfoProps extends SpeakerInfo, BaseComponentInterface {}

export interface SpeakerLinkProps extends SpeakerLink, BaseComponentInterface {}
