import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

export interface ProgressCard {
  src: string;
  alt?: string;
  progress: number;
}

export interface ProgressCardProps extends ProgressCard, BaseComponentInterface{}
