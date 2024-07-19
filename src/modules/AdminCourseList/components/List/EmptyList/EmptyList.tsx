import styles from "./styles.module.scss"
const EmptyList = () => {
  return <div className={styles.container}>У вас нет курсов. Чтобы добавить новый нажмите Создать курс</div>;
};

export default EmptyList;
