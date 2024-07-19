import styles from "./styles.module.scss";
import Button from "../../../../../ui/Button/Button";
import { formatTime } from "../../../../../shared/functions/formatTime";
import { FC } from "react";
import { TimeCodeProps } from "./interface";

const TimeCode: FC<TimeCodeProps> = ({ className, time, name }) => {
  return (
    <li className={`${styles.container} ${className}`}>
      <div className={styles.time}>{formatTime(time)}</div>
      <div className={styles.name}>- {name}</div>
    </li>
  );
};

export default TimeCode;
