import { formatTime } from "../../../../../../shared/functions/formatTime";
import { TimeCodeProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";

const TimeCode: FC<TimeCodeProps> = ({ curTime, className }) => {
  return <div className={styles.container}>{formatTime(curTime)}</div>;
};

export default TimeCode;
