import styles from "./style.module.scss";
import Avatar from "../Avatar/avatar";
import { formatCourseWord, formatLessonWord } from "./helpers/formatWords";
import { SpeakerLinkProps } from "./interface";
import { FC } from "react";
import { Link } from "react-router-dom";
import LinkToPage from "../LinkToPage/LinkToPage";
const SpeakerLink: FC<SpeakerLinkProps> = ({
  name,
  className,
  avatar,
  numCourses,
  numLessons,
  to,
}) => {
  return (
    <Link to={to} className={`${styles.container} ${className}`}>
      <Avatar
        className={styles.avatar}
        width={80}
        height={80}
        src={avatar}
        alt="avatar"
      />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.params}>
          {numCourses} {formatCourseWord(numCourses)}, {numLessons}{" "}
          {formatLessonWord(numLessons)}
        </div>
        <LinkToPage text="перейти" />
      </div>
    </Link>
  );
};

export default SpeakerLink;
