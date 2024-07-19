import { WarningWindowProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";

const WarningWindow: FC<WarningWindowProps> = ({
  boldText,
  infoText,
  children,
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={styles.modalCont}
    >
      <div className={styles.modalText}>
        <span>{boldText}</span>
        <div>{infoText}</div>
      </div>

      {children}
    </div>
  );
};

export default WarningWindow;
