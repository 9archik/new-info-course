import { SVGIcons } from "./interface";
import { FC } from "react";
const ArrowSVG: FC<SVGIcons> = ({ width = 12, height = 7, className, style }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path
        d="M11 6L6 1L1 6"
        stroke="#946EFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSVG;
