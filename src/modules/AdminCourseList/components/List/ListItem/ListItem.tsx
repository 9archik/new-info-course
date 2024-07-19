import { FC } from "react";
import { ListCourseCardProps } from "./interface";
import CourseCard from "../../CourseCard/CourseCard";
import styles from "./styles.module.scss";
import Modal from "../../../../../ui/Modal/Modal";
import { useState } from "react";
import ConfirmWindow from "../../../../../components/ConfirmWindow/ConfirmWindow";
import { useNavigate } from "react-router-dom";

const ListItem: FC<ListCourseCardProps> = ({ data }) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.cont}>
        {data.map((el, index) => {
          return (
            <CourseCard
              onCardClick={() => {
                navigate("/addVideo");
              }}
              title={el.title}
              theme={el.theme}
              link_to="/editCourse"
              key={index}
              clickButtonDelete={(e) => {
                e.stopPropagation();
                setModalActive(true);
              }}
              className={styles.card}
            />
          );
        })}
      </div>

      <Modal active={modalActive}>
        <ConfirmWindow
          boldText="Удалить курс?"
          infoText="Вы уверены что хотите удалить курс? Это действие невозможно отменить"
          cancelClick={() => {
            setModalActive(false);
          }}
          confirmClick={() => {
            setModalActive(false);
          }}
        />
      </Modal>
    </>
  );
};

export default ListItem;
