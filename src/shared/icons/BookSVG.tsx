import { SVGIcons } from "./interface";
import { FC } from "react";

const BookSVG: FC<SVGIcons> = ({ width = 16, height = 22, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 21.5H2C1.60218 21.5 1.22064 21.342 0.93934 21.0607C0.658035 20.7794 0.5 20.3978 0.5 20V2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5H14C14.3978 0.5 14.7794 0.658035 15.0607 0.93934C15.342 1.22064 15.5 1.60218 15.5 2V14.4635L11.75 12.5885L8 14.4635V2H2V20H14V17H15.5V20C15.4994 20.3976 15.3412 20.7788 15.06 21.06C14.7788 21.3412 14.3976 21.4994 14 21.5ZM11.75 10.9115L14 12.0365V2H9.5V12.0365L11.75 10.9115Z"
        fill="#946EFF"
      />
    </svg>
  );
};

export default BookSVG;
