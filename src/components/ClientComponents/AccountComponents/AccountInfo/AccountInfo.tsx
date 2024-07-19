import Avatar from "../../Avatar/avatar";
import styles from "./styles.module.scss";
import avatar from "../../../../shared/images/preview.png";
import { FC } from "react";
import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import { AccountInfoProps } from "./interface";
const AccountInfo: FC<AccountInfoProps> = ({
  className,
  avatar,
  name,
  username,
  status,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Avatar src={avatar} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.username}>{username}</div>
      </div>

      <div className={styles.status}>{status}</div>
    </div>
  );
};

export default AccountInfo;
