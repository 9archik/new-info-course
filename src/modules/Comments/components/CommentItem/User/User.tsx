import { UserInfoProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";
import Avatar from "../../../../../components/ClientComponents/Avatar/avatar";
const CommentUser: FC<UserInfoProps> = ({ className, avatar, name }) => {
  return (
    <div className={styles.container}>
      <Avatar src={avatar} alt={`avatar ${name}`} />
      <span>{name}</span>
    </div>
  );
};

export default CommentUser;
