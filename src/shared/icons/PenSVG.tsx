import { FC } from "react";
import { SVGIcons } from "./interface";

const PenSVG: FC<SVGIcons> = ({ width = 13, height = 13, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.7888 2.91918C13.0704 2.63755 13.0704 2.16817 12.7888 1.90099L11.099 0.211221C10.8318 -0.0704069 10.3624 -0.0704069 10.0808 0.211221L8.75212 1.5327L11.4601 4.24066M0 10.292V13H2.70796L10.6946 5.00611L7.98667 2.29815L0 10.292Z"
        fill="#202020"
      />
    </svg>
  );
};

export default PenSVG;
