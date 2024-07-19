import { CourseItemProps } from "./interface";
import { FC } from "react";
import styles from "./styles.module.scss";
import CardInfo from "../../../../components/CardInfo/CardInfo";
import previewPNG from "../../../../shared/images/preview.png";
const CourseCard: FC<CourseItemProps> = ({
  title,
  theme,
  clickButtonDelete,
  link_to,
  className,
  onCardClick,
}) => {

  return (
    <CardInfo
      onCardClick={onCardClick}
      alt=""
      clickButtonDelete={clickButtonDelete}
      link_to={link_to}
      img={previewPNG}
      className={`${styles.container} ${className}`}
    >
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.theme}>{theme}</div>
      </div>
    </CardInfo>
  );
};

export default CourseCard;
