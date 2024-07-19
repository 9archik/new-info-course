import { AccountCardInfoProps } from "./interface";
import Progress from "./Progress/Progress";
import styles from "./styles.module.scss";
import { FC } from "react";

const AccountCardInfo: FC<AccountCardInfoProps> = ({
  preview,
  progress,
  title,
  subtitle,
  direction = "row",
  className,
}) => {
  return (
    <div className={`${styles.container} ${styles[direction]} ${className}`}>
      <Progress className={styles.preview} src={preview} progress={progress} />
      <div
        className={`${styles.info} ${direction === "row" && styles.column}`}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
};

export default AccountCardInfo;
