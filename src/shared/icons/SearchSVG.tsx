import { FC } from "react";
import { SVGIcons } from "./interface";

const SearchSVG: FC<SVGIcons> = ({
  width = 16,
  height = 16,
  className,
  fill,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2478 10.8328C9.14833 11.8374 7.71476 12.2164 6.7654 12.2164C5.03701 12.2164 1.70367 10.96 1.70367 6.96002C1.70367 2.96002 5.03701 1.70361 6.7654 1.70361C8.4938 1.70361 11.8271 2.96002 11.8271 6.96002C11.8271 8.76294 11.1499 10.0085 10.2478 10.8328ZM10.2478 10.8328L14.2963 15.0369"
        stroke="#97A0A7"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default SearchSVG;
