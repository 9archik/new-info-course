import { FC } from "react";
import styles from "./styles.module.scss";
import { MaterialLinkProps } from "./interface";
const MaterialLink: FC<MaterialLinkProps> = ({ text, href, className }) => {
  return <div className={`${styles.link} ${className}`}>{text}</div>;
};

export default MaterialLink;
