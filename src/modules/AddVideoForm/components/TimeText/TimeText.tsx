import { formatTime } from "../../../../shared/functions/formatTime";
import { TimeTextProps } from "./interface";
import styles from "./style.module.scss";
import { FC } from "react";
const TimeText: FC<TimeTextProps> = ({ curTime, endTime }) => {
  return (
    <div className={styles.container}>
      <span className={styles.curTime}>{formatTime(curTime)}</span>
      <span className={styles.endTime}>/ {formatTime(endTime)}</span>
    </div>
  );
};

export default TimeText;
