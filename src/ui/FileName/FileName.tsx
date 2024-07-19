import { FC } from "react";
import FileSVG from "../../shared/icons/FileSVG";
import styles from "./styles.module.scss";
import { FilenameUI } from "./interface";
import Button from "../Button/Button";
import DeleteSVG from "../../shared/icons/DeleteSVG";
const FileName: FC<FilenameUI> = ({ name, onClickDeleteButton, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <FileSVG />
      <span>{name}</span>
      {onClickDeleteButton && (
        <Button onClick={onClickDeleteButton}>
          <DeleteSVG />
        </Button>
      )}
    </div>
  );
};

export default FileName;
