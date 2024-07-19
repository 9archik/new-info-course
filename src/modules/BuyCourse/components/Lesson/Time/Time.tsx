import { FC } from "react";
import styles from "./styles.module.scss";
import { TimeProps } from "./interface";
import { formatTime } from "../../../../../shared/functions/formatTime";
const Time: FC<TimeProps> = ({ className, time }) => {
  return (
    <div className={`${styles.time} ${className}`}>{formatTime(time)}</div>
  );
};

export default Time;
