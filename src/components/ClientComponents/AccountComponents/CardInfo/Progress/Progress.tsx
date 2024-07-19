import { FC } from "react";
import styles from "./styles.module.scss";
import { ProgressCardProps } from "./interface";
const Progress: FC<ProgressCardProps> = ({ src, alt, progress, className }) => {
  return (
    <div className={`${styles.progress} ${className}`}>
      <div className={styles.imgCont}>
        <img src={src} alt={alt} />
      </div>

      <span
        style={{ width: `${progress}%` }}
        className={styles.progressBar}
      ></span>
    </div>
  );
};

export default Progress;
