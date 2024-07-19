import PageTitle from "../../ui/PageTitle/PageTitle";
import styles from "./styles.module.scss";
import CommentList from "./components/CommentList/CommentList";
import BottomButtonPanel from "../../ui/BottomButtonPanel/BottomButtonPanel";
import { useState } from "react";
import Modal from "../../ui/Modal/Modal";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import Textarea from "../../ui/Textarea/textarea";
import Button from "../../ui/Button/Button";
const Comments = () => {
  const [modalActive, setModalActive] = useState(false);
  const clickClose = () => {
    setModalActive(false);
  };
  return (
    <>
      <div style={{ paddingBottom: 120 }} className={styles.container}>
        <PageTitle text="Комментарии" className={styles.title} />
        <CommentList />
      </div>

      <BottomButtonPanel
        clickMainButton={() => {
          setModalActive(true);
        }}
        childrenMainButton={<>Оставить комментарий</>}
      />

      <Modal active={modalActive}>
        <ModalPopup
          className={styles.commentPopup}
          clickClose={clickClose}
          header="Ваш комментарий"
        >
          <Textarea textareaClassName={styles.commentInput} />
          <Button
            className={styles.submitBtn}
            onClick={(e) => {
              setModalActive(false);
            }}
          >
            Отправить
          </Button>
        </ModalPopup>
      </Modal>
    </>
  );
};

export default Comments;
