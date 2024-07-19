import { FC } from "react";
import { BaseComponentButtonInterface } from "../../../shared/models/BaseComponentInterface";
import Button from "../../../ui/Button/Button";
import styles from "./styles.module.scss";

const BaseButton: FC<BaseComponentButtonInterface> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <Button onClick={onClick} className={`${styles.btn} ${className}`}>
      {children}
    </Button>
  );
};

export default BaseButton;
