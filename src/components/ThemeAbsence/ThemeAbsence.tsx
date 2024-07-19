import styles from "./styles.module.scss";
const ThemeAbsence = () => {
  return (
    <div className={styles.container}>
      Если выбранная тема отсутсвует, <a>напишите админу</a>
    </div>
  );
};

export default ThemeAbsence;
