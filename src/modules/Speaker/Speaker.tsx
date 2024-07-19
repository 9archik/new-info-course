import styles from "./styles.module.scss";
import PageTitle from "../../ui/PageTitle/PageTitle";
import SearchInput from "../../components/SearchInput/SearchInput";
import Toggler from "../../components/Toggler/Toggler";
import { TogglerModel } from "../../components/Toggler/interface";
import CourseCard from "../../components/ClientComponents/CourseCard/CourseCard";
import { useState } from "react";
import { useEffect } from "react";
import avatar from "../../shared/images/preview.png";
import SpeakerInfo from "../../components/ClientComponents/Speaker/SpeakerInfo";

const TogglerVariants: TogglerModel[] = [
  { text: "Тематика 1", value: 1 },
  { text: "Тематика 2", value: 2 },
  { text: "Тематика 3", value: 3 },
  { text: "Тематика 4", value: 4 },
  { text: "Тематика 1", value: 5 },
  { text: "Тематика 2", value: 6 },
  { text: "Тематика 3", value: 7 },
  { text: "Тематика 4", value: 8 },
];
const Speaker = () => {
  const [themeVal, setThemeVal] = useState<string | number | null>(null);

  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <>
      <SpeakerInfo
        avatar={avatar}
        name="Иванов Иван"
        numCourses={3}
        numLessons={45}
        className={styles.speakerInfo}
      />

      <PageTitle text="Курсы" className={styles.title} />

      <div className={styles.togglerCont}>
        <Toggler
          name={"speakers"}
          className={styles.toggler}
          value={themeVal}
          variants={TogglerVariants}
          onChange={(value) => {
            setThemeVal(value);
          }}
        />
      </div>

      <div className={styles.cardList}>
        <CourseCard
          className={styles.card}
          name={"Искусственный интеллект"}
          lesson_number={18}
          likes={185}
          views={530}
          comments={30}
        />

        <CourseCard
          className={styles.card}
          name={"Искусственный интеллект"}
          lesson_number={18}
          likes={185}
          views={530}
          comments={30}
        />

        <CourseCard
          className={styles.card}
          name={"Искусственный интеллект"}
          lesson_number={18}
          likes={185}
          views={530}
          comments={30}
        />

        <CourseCard
          className={styles.card}
          name={"Искусственный интеллект"}
          lesson_number={18}
          likes={185}
          views={530}
          comments={30}
        />
      </div>
    </>
  );
};

export default Speaker;
