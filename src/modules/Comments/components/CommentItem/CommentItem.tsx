import { CommentItemProps } from "./interface";
import { FC, useState } from "react";
import styles from "./styles.module.scss";
import CommentUser from "./User/User";
import CommentText from "./Text/Text";
import Button from "../../../../ui/Button/Button";
import ArrowSVG from "../../../../shared/icons/ArrowSVG";
import Modal from "../../../../ui/Modal/Modal";
import ModalPopup from "../../../../components/ModalPopup/ModalPopup";
const CommentItem: FC<CommentItemProps> = ({
  text,
  avatar,
  name,
  commentKids,
  level,
}) => {
  const [openKids, setOpenKids] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  return (
    <div style={{ marginLeft: 20 * level }} className={styles.container}>
      <CommentUser name={name} avatar={avatar} />
      <CommentText text={text} />

      {commentKids && commentKids.length > 0 && (
        <Button
          onClick={() => {
            setOpenKids(!openKids);
          }}
          className={styles.answerBtn}
        >
          <span>Ответ автора</span>{" "}
          <ArrowSVG
            style={{
              transform: openKids ? "rotate(0deg)" : "rotate(180deg)",
              transition: "0.25s",
            }}
          />
        </Button>
      )}

      {openKids &&
        commentKids &&
        commentKids.map((el) => {
          return (
            <CommentItem
              level={el.level}
              text={el.text}
              name={el.name}
              avatar={el.avatar}
            />
          );
        })}

   
    </div>
  );
};

export default CommentItem;
