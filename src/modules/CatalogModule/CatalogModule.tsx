import { TogglerModel } from "../../components/Toggler/interface";
import Toggler from "../../components/Toggler/Toggler";
import PageTitle from "../../ui/PageTitle/PageTitle";
import CourseCard from "../../components/ClientComponents/CourseCard/CourseCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import styles from "./styles.module.scss";
import { useState } from "react";
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
const CatalogModule = () => {
  const [themeVal, setThemeVal] = useState<string | number | null>(null);
  return (
    <>
      <PageTitle className={styles.title} text="Каталог" />

      <SearchInput containerClassName={styles.searchInput} placeholder="Поиск" />

      <div className={styles.togglerCont}>
        <Toggler
          name={"themes"}
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

export default CatalogModule;
