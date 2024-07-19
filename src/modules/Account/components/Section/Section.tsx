import LinkToPage from "../../../../components/ClientComponents/LinkToPage/LinkToPage";
import PageTitle from "../../../../ui/PageTitle/PageTitle";
import { SectionProps } from "./interface";
import { FC } from "react";
import styles from "./style.module.scss";
const Section: FC<SectionProps> = ({ to, name, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <PageTitle text={name} /> <LinkToPage to={to} />
    </div>
  );
};

export default Section;
