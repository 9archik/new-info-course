import Avatar from "../Avatar/avatar";
import { SpeakerInfoProps } from "./interface";
import styles from "./style.module.scss";
import { FC } from "react";
import { formatCourseWord, formatLessonWord } from "./helpers/formatWords";

const SpeakerInfo: FC<SpeakerInfoProps> = ({
  name,
  className,
  avatar,
  numCourses,
  numLessons,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
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
      </div>
    </div>
  );
};

export default SpeakerInfo;
