import { StepProps } from "./interface";
import { FC } from "react";
import styles from "./styles.module.scss";
import PageTitle from "../../../../../ui/PageTitle/PageTitle";
import MaterialAttachmentList from "../../../../../components/ClientComponents/MaterialAttachmentList/MaterialAttachmentList";
import MaterialListLink from "../../../../../components/ClientComponents/MaterialListLink/MaterialListLink";
const Step: FC<StepProps> = ({
  className,
  step_number,
  description,
  attachments,
  links,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <PageTitle className={styles.header} text={`Шаг ${step_number}`} />
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Mollis donec hendrerit congue
        tincidunt malesuada lobortis
      </div>

      {links && links.length > 0 && <MaterialListLink links={links} />}

      {attachments && attachments.length > 0 && (
        <MaterialAttachmentList attachments={attachments} />
      )}
    </div>
  );
};

export default Step;
