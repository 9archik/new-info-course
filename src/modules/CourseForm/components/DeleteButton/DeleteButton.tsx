import { FC } from "react";
import { DeleteButtonProps } from "./interface";
import Button from "../../../../ui/Button/Button";
import styles from "./styles.module.scss";

const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <Button className={styles.btn} onClick={onClick}>
      Удалить курс
    </Button>
  );
};

export default DeleteButton;
