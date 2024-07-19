import { FC } from "react";
import styles from "./styles.module.scss";
import { BottomPanelUI } from "./interface";
import Button from "../Button/Button";

const BottomButtonPanel: FC<BottomPanelUI> = ({
  className,
  children,
  childrenMainButton,
  clickMainButton,
  typeButton = "button",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Button
        type={typeButton}
        onClick={clickMainButton}
        className={styles.mainButton}
      >
        {childrenMainButton}
      </Button>
      {children}
    </div>
  );
};

export default BottomButtonPanel;
