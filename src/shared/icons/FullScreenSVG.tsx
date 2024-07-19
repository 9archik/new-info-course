import { SVGIcons } from "./interface";
import { FC } from "react";

const FullScreenSVG: FC<SVGIcons> = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.125 3V4.875C6.125 5.56536 5.56536 6.125 4.875 6.125H3"
        stroke="white"
        stroke-width="0.9375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.875 13L9.875 11.125C9.875 10.4346 10.4346 9.875 11.125 9.875L13 9.875"
        stroke="white"
        stroke-width="0.9375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 6.125L11.125 6.125C10.4346 6.125 9.875 5.56536 9.875 4.875L9.875 3"
        stroke="white"
        stroke-width="0.9375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 9.875L4.875 9.875C5.56536 9.875 6.125 10.4346 6.125 11.125L6.125 13"
        stroke="white"
        stroke-width="0.9375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FullScreenSVG;
