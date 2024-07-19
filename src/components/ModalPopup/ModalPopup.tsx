import DeleteSVG from "../../shared/icons/DeleteSVG";
import Button from "../../ui/Button/Button";
import { ModalPopupProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";

const ModalPopup: FC<ModalPopupProps> = ({
  header,
  className,
  clickClose,
  headerClassName,
  children,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {header && (
        <div className={`${styles.header} ${headerClassName}`}>{header}</div>
      )}

      <Button className={styles.closeBtn} onClick={clickClose}>
        <DeleteSVG />
      </Button>

      {children}
    </div>
  );
};

export default ModalPopup;
