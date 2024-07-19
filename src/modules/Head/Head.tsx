import Header from "./components/Header/Header";
import SectionName from "./components/SectionName/SectionName";
import { SpeakerItemModel } from "./components/SpeakerList/SpeakerItem/interface";
import styles from "./styles.module.scss";
import avatar from "../../shared/images/preview.png";
import SpeakerList from "./components/SpeakerList/SpeakerList";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { TogglerModel } from "../../components/Toggler/interface";
import { useEffect, useRef, useState } from "react";
import Toggler from "../../components/Toggler/Toggler";
import CourseCard from "../../components/ClientComponents/CourseCard/CourseCard";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
const SPEAKERS: SpeakerItemModel[] = [
  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Мухамед Абужалиль Оглы", avatar: avatar, to: "" },
  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Абу Бамуран эл малан", avatar: avatar, to: "" },
  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Мухамед Абужалиль Оглы", avatar: avatar, to: "" },
  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Абу Бамуран эл малан", avatar: avatar, to: "" },

  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Мухамед Абужалиль Оглы", avatar: avatar, to: "" },
  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Абу Бамуран эл малан", avatar: avatar, to: "" },

  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Мухамед Абужалиль Оглы", avatar: avatar, to: "" },
  { name: "Иванов Иван", avatar: avatar, to: "" },
  { name: "Абу Бамуран эл малан", avatar: avatar, to: "" },
];

const TOPTOGGLERS: TogglerModel[] = [
  { text: "Популярные", value: 1 },
  { text: "Топ", value: 2 },
];

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
const Head = () => {
  const [topTogglerValue, setTopTogglerValue] = useState<number | string>(1);
  const [themeValue, setThemeValue] = useState<number | string | null>(null);
  const [activeBurger, setActiveBurger] = useState(false);

  const themeRef = useRef<HTMLDivElement | null>(null);
  const themeContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (themeRef && themeRef.current) {
      themeRef.current.style.height = `${
        themeContentRef?.current ? themeContentRef.current.clientHeight : 0
      }px`;
    }
  }, []);

  return (
    <>
      <Header
        clickBurger={() => {
          setActiveBurger(true);
        }}
      />

      <SectionName name="Курсы" to="/catalog" className={styles.courseName} />

      <div
        ref={themeRef}
        className={`${styles.scrollContainer} ${styles.themeToggler}`}
      >
        <div ref={themeContentRef} className={styles.content}>
          <Toggler
            value={themeValue}
            variants={TogglerVariants}
            onChange={(value) => {
              setThemeValue(value);
            }}
            name="themes"
          />
        </div>
      </div>

      <SectionName name="Спикеры" to="/speakerList" className={styles.speakerName} />

      <SpeakerList speakers={SPEAKERS} className={styles.speakerList} />

      <PageTitle className={styles.topName} text="Топ" />

      <Toggler
        className={styles.topToggler}
        value={topTogglerValue}
        onChange={(value) => {
          setTopTogglerValue(value);
        }}
        name="top"
        variants={TOPTOGGLERS}
      />

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

      <BurgerMenu
        clickClose={() => {
          setActiveBurger(false);
        }}
        active={activeBurger}
      />
    </>
  );
};

export default Head;
