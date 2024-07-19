import PlusSVG from "../../../../shared/icons/PlusSVG";
import FileInput from "../../../../ui/FileInput/FileInput";
import FileName from "../../../../ui/FileName/FileName";
import FormItem from "../../FormItem";
import { FormItemFilesProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";

const FormItemFiles: FC<FormItemFilesProps> = ({
  className,
  addFile,
  files,
  deleteFile,
  childrenFileInput,
  multiple = false,
  formName = "Файлы",
}) => {
  return (
    <FormItem containerClassName={className} name={formName}>
      {files.map((el, index) => {
        return (
          <FileName
            className={styles.linkItem}
            onClickDeleteButton={() => {
              if (deleteFile) deleteFile(index);
            }}
            name={el.file.name}
          />
        );
      })}

      <FileInput
        accept="image/*"
        multiple
        className={styles.input}
        onChange={addFile}
      >
        {childrenFileInput ? (
          childrenFileInput
        ) : (
          <>
            <PlusSVG className={styles.svg} /> Загрузить файл
          </>
        )}
      </FileInput>
    </FormItem>
  );
};

export default FormItemFiles;
