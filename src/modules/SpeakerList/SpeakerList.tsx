import SearchInput from "../../components/SearchInput/SearchInput";
import PageTitle from "../../ui/PageTitle/PageTitle";
import styles from "./styles.module.scss";
import { TogglerModel } from "../../components/Toggler/interface";
import Toggler from "../../components/Toggler/Toggler";
import { useState } from "react";
import SpeakerLink from "../../components/ClientComponents/Speaker/SpeakerLink";
import avatar from "../../shared/images/preview.png";

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

const SpeakerList = () => {
  const [themeVal, setThemeVal] = useState<string | number | null>(null);
  return (
    <>
      <PageTitle text="Спикеры" className={styles.title} />

      <SearchInput
        containerClassName={styles.searchInput}
        placeholder="Поиск"
      />

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

      <SpeakerLink
        to={"/speakerInfo"}
        avatar={avatar}
        name="Иванов Иван"
        numCourses={3}
        numLessons={45}
        className={styles.speakerInfo}
      />

      <SpeakerLink
        to={"/speakerInfo"}
        avatar={avatar}
        name="Иванов Иван"
        numCourses={3}
        numLessons={45}
        className={styles.speakerInfo}
      />

      <SpeakerLink
        to={"/speakerInfo"}
        avatar={avatar}
        name="Иванов Иван"
        numCourses={3}
        numLessons={45}
        className={styles.speakerInfo}
      />

      <SpeakerLink
        to={"/speakerInfo"}
        avatar={avatar}
        name="Иванов Иван"
        numCourses={3}
        numLessons={45}
        className={styles.speakerInfo}
      />
    </>
  );
};

export default SpeakerList;
