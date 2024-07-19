import { FC } from "react";
import styles from "./styles.module.scss";
import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";
import CompleteSVG from "../../../../../shared/icons/CompleteSVG";
const CompleteIcon: FC<BaseComponentInterface> = ({ className }) => {
  return (
    <div className={`${styles.icon} ${className}`}>
      <CompleteSVG />
    </div>
  );
};

export default CompleteIcon;
