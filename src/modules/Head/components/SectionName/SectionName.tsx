import LinkToPage from "../../../../components/ClientComponents/LinkToPage/LinkToPage";
import PageTitle from "../../../../ui/PageTitle/PageTitle";
import { SectionNameProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";
const SectionName: FC<SectionNameProps> = ({ name, to, className }) => {
  return (
    <div className={`${styles.section} ${className}`}>
      <PageTitle text={name} />
      <LinkToPage to={to} />
    </div>
  );
};

export default SectionName;
