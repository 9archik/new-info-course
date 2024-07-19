import { AuthorProps } from "./interface";
import { FC } from "react";
import styles from "./styles.module.scss";
import Avatar from "../Avatar/avatar";

const MaterialAuthor: FC<AuthorProps> = ({ name, role, avatar, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Avatar src={avatar} />
      <div className={styles.info}>
        <div className={styles.name}>Иванов Иван</div>
        <div className={styles.role}>Автор курса</div>
      </div>
    </div>
  );
};

export default MaterialAuthor;
