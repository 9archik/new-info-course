import { PageTitleUI } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";
const PageTitle: FC<PageTitleUI> = ({ className, text }) => {
  return <div className={`${styles.container} ${className}`}>{text}</div>;
};

export default PageTitle;
