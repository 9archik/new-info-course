import { CommentTextProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";
const CommentText: FC<CommentTextProps> = ({ className, text }) => {
  return <div className={`${styles.text} ${className}`}>{text}</div>;
};

export default CommentText;
