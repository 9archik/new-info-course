import { MaterialAttachmentListProps } from "./interface";
import MaterialAttachment from "./MaterialAttachment/MaterialAttachment";
import styles from "./styles.module.scss";
import { FC } from "react";
const MaterialAttachmentList: FC<MaterialAttachmentListProps> = ({
  attachments = [],
}) => {
  return (
    <div className={styles.container}>
      {attachments.map((el) => {
        return <MaterialAttachment className={styles.attach} onClick={() => {}} name={el} />;
      })}
    </div>
  );
};

export default MaterialAttachmentList;
