import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import { SpeakerItemModel } from "./SpeakerItem/interface";

export interface SpeakerListProps extends BaseComponentInterface {
  speakers: SpeakerItemModel[];
}
