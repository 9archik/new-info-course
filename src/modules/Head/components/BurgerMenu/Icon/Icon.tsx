import { FC } from "react";
import styles from "./styles.module.scss";
import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

const Icon: FC<BaseComponentInterface> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Icon;
