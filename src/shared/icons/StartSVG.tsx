import { SVGProps } from "react";
import { FC } from "react";
import { SVGIcons } from "./interface";

const StartSVG: FC<SVGIcons> = ({ ref }) => {
  return (
    <svg ref={ref} height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
      <path
        fill="white"
        d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
        id="ytp-id-122"
      ></path>
    </svg>
  );
};

export default StartSVG;
