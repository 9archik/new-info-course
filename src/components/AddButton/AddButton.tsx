import styles from "./styles.module.scss";
import Button from "../../ui/Button/Button";
import { ButtonUI } from "../../ui/Button/interface";
import { FC } from "react";
import LinkSVG from "../../shared/icons/LinkSVG";
import { AddLinkButtonProps } from "./interface";

const AddButton: FC<AddLinkButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <Button onClick={onClick} className={`${styles.container} ${className}`}>
      {children ? (
        children
      ) : (
        <span>
          <LinkSVG /> Прикрепить ссылку
        </span>
      )}
    </Button>
  );
};

export default AddButton;
