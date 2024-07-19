import { FC } from "react";
import WarningWindow from "../../ui/WarningWindow/WarningWIndow";
import { ConfirmWindowProps } from "./interface";
import styles from "./styles.module.scss";
import Button from "../../ui/Button/Button";

const ConfirmWindow: FC<ConfirmWindowProps> = ({
  confirmButtonChild,
  confirmClick,
  cancelButtonChild,
  cancelClick,
  boldText,
  infoText,
}) => {
  return (
    <WarningWindow infoText={infoText} boldText={boldText}>
      <div className={styles.container}>
        <Button onClick={cancelClick}>
          {cancelButtonChild ? cancelButtonChild : "Отмена"}
        </Button>
        <Button onClick={confirmClick}>
          {confirmButtonChild ? confirmButtonChild : "Удалить"}
        </Button>
      </div>
    </WarningWindow>
  );
};

export default ConfirmWindow;
