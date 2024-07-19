import { FC } from "react";
import styles from "./styles.module.scss";
import { FileInputProps } from "./interface";
import FileSVG from "../../shared/icons/FileSVG";
const FileInput: FC<FileInputProps> = ({
  className,
  onChange,
  children,
  accept,
  multiple,
}) => {
  return (
    <label className={`${styles.container} ${className}`}>
      <input multiple accept={accept} onChange={onChange} type="file" />
      <div className={styles.inputCont}>
        {children ? (
          children
        ) : (
          <>
            <FileSVG /> <span>Прикрепить вложение</span>
          </>
        )}
      </div>
    </label>
  );
};

export default FileInput;
