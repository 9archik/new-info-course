
import { FC } from "react";
import { SVGIcons } from "./interface";

const PauseSVG: FC<SVGIcons> = ({ref}) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.6113 16.9018C24.5964 16.3337 24.5964 14.9119 23.6113 14.3438L10.8159 6.96336C9.8315 6.39557 8.60156 7.10602 8.60156 8.24241V23.0032C8.60156 24.1396 9.8315 24.85 10.8159 24.2822L23.6113 16.9018Z"
        fill="white"
      />
    </svg>
  );
};

export default PauseSVG;
