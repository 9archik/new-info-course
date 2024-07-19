import DeleteSVG from "../../../../../shared/icons/DeleteSVG";
import { TimeCodeItemProps } from "./interface";
import styles from "./styles.module.scss";
import TimeCode from "./TimeCode/TimeCode";
import TimeCodeName from "./TimeCodeName/TimeCodeName";
import { FC } from "react";
import Button from "../../../../../ui/Button/Button";

const TimeCodeItem: FC<TimeCodeItemProps> = ({
  readonly = false,
  className,
  curTime,
  children,
  name,
  deleteClick,
  onChangeName,
  deleteMode = true,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <TimeCode curTime={curTime} />
      <TimeCodeName readonly={readonly} value={name} onChange={onChangeName} />
      {deleteMode ? (
        <Button
          className={styles.deleteBtn}
          onClick={() => {
            deleteClick();
          }}
        >
          <DeleteSVG />
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TimeCodeItem;
