import { TimeCodeListProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";
import TimeCode from "./TimeCode/TimeCode";
const TimeCodeList: FC<TimeCodeListProps> = ({ className, timecodes }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {timecodes.map((el) => {
        return (
          <TimeCode className={styles.timeCode} name={el.name} time={el.time} />
        );
      })}
    </div>
  );
};

export default TimeCodeList;
