import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

export interface SpeakerItemModel {
  avatar: string;
  name: string;
  to: string;
}

export interface SpeakerItemProps
  extends BaseComponentInterface,
    SpeakerItemModel {}
