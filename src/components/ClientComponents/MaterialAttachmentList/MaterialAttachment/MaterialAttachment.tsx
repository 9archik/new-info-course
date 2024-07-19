import { BaseComponentButtonInterface } from "../../../../shared/models/BaseComponentInterface";
import Button from "../../../../ui/Button/Button";
import { FC } from "react";
import { MaterialAttachmentProps } from "./interface";
import styles from "./styles.module.scss";
import FileSVG from "../../../../shared/icons/FileSVG";

const MaterialAttachment: FC<MaterialAttachmentProps> = ({
  onClick,
  className,
  name,
}) => {
  return (
    <Button onClick={onClick} className={`${styles.btn} ${className}`}>
      <FileSVG />
      {name}
    </Button>
  );
};

export default MaterialAttachment;
