import Lesson from "../Lesson/Lesson";
import styles from "./styles.module.scss";

const LessonList = () => {
  return (
    <div className={styles.container}>
      <Lesson className={styles.lesson} isCompleted name="name" />
      <Lesson className={styles.lesson} isCompleted name="name" />
      <Lesson className={styles.lesson} isCompleted={false} name="name" />
      <Lesson className={styles.lesson} isCompleted={false} name="name" />
      <Lesson className={styles.lesson} isCompleted={false} name="name" />
      <Lesson className={styles.lesson} isCompleted={false} name="name" />
    </div>
  );
};

export default LessonList;
