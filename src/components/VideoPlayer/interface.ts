import { MutableRefObject, RefObject } from "react";
import { BaseComponentInterface } from "../../shared/models/BaseComponentInterface";

export interface VideoPlayerProps extends BaseComponentInterface {
  src: string;
  onPlay?: React.ReactEventHandler<HTMLVideoElement>;
  onTimeChange?: (e: Event, onTimeChange: number) => void;
  videoElementRef?: MutableRefObject<HTMLVideoElement | null>;
}
