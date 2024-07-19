import DeleteSVG from "../../shared/icons/DeleteSVG";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
import { LinkNameProps } from "./interface";
import { FC } from "react";
const LinkName: FC<LinkNameProps> = ({
  name,
  href,
  onClickDelete,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <span>{name}</span>
      {onClickDelete && (
        <Button className={styles.deleteBtn} onClick={onClickDelete}>
          <DeleteSVG />
        </Button>
      )}
    </div>
  );
};

export default LinkName;
