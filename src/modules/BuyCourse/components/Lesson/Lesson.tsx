import PauseSVG from "../../../../shared/icons/PauseSVG";
import { BaseComponentButtonInterface } from "../../../../shared/models/BaseComponentInterface";
import Button from "../../../../ui/Button/Button";
import { FC } from "react";
import styles from "./styles.module.scss";
import { LessonProps } from "./interface";
import CompleteIcon from "./CompleteIcon/CompleteIcon";
import Time from "./Time/Time";

const Lesson: FC<LessonProps> = ({ className, isCompleted, name }) => {
  return (
    <div className={`${className} ${styles.btn}`}>
      <PauseSVG />
      <span>{name}</span>
      <div>{isCompleted ? <CompleteIcon /> : <Time time={30} />}</div>
    </div>
  );
};

export default Lesson;
