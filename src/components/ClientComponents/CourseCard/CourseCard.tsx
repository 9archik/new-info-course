import styles from "./styles.module.scss";
import LinkToPage from "../LinkToPage/LinkToPage";
import LikeSVG from "../../../shared/icons/LikeSVG";
import MessageSVG from "../../../shared/icons/MessageSVG";
import EyeSVG from "../../../shared/icons/EyeSVG";
import { FC } from "react";
import { CourseCardProps } from "./interface";
import ellipseIMG from "../../../shared/images/Ellipse.png";
import { Link } from "react-router-dom";

const CourseCard: FC<CourseCardProps> = ({
  name,
  lesson_number,
  likes,
  views,
  comments,
  className,
}) => {
  return (
    <Link to={"/buyCourse"} className={`${styles.container} ${className}`}>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          <div className={styles.name}>{name}</div>
          <div className={styles.lesNum}>{lesson_number} уроков</div>
        </div>

        <LinkToPage text="Перейти" />

        <img src={ellipseIMG} alt="ellipse" />
      </div>

      <ul className={styles.params}>
        <li>
          <LikeSVG />
          <span>{likes}</span>
        </li>

        <li>
          <MessageSVG />
          <span>{comments}</span>
        </li>

        <li>
          <EyeSVG />
          <span>{views}</span>
        </li>
      </ul>
    </Link>
  );
};

export default CourseCard;
