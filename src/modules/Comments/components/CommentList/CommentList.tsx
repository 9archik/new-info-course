import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import CommentItem from "../CommentItem/CommentItem";
import { CommentModel } from "../CommentItem/interface";
import styles from "./styles.module.scss";
import { FC } from "react";
import avatar from "../../../../shared/images/preview.png";

const COMMENTLIST: CommentModel[] = [
  {
    avatar: avatar,
    text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
    name: "Иванов Иван",
    level: 0,
    commentKids: [
      {
        avatar: avatar,
        text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
        name: "Иванов Иван",
        level: 1,
      },
      {
        avatar: avatar,
        text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
        name: "Иванов Иван",
        level: 1,
      },

      {
        avatar: avatar,
        text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
        name: "Иванов Иван",
        level: 1,
      },
    ],
  },
  {
    avatar: avatar,
    text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
    name: "Иванов Иван",
    level: 0,
    commentKids: [
      {
        avatar: avatar,
        text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
        name: "Иванов Иван",
        level: 1,
      },
      {
        avatar: avatar,
        text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
        name: "Иванов Иван",
        level: 1,
      },

      {
        avatar: avatar,
        text: "Lorem ipsum dolor sit amet consectetur. Sed pretium viverra lacinia amet nisl natoque mi donec vitae. Fusce risus at faucibus ipsum. Nec condimentum eleifend platea dolor eu. Fermentum donec eu lobortis turpis sit.",
        name: "Иванов Иван",
        level: 1,
      },
    ],
  },
];

const CommentList: FC<BaseComponentInterface> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {COMMENTLIST.map((el) => {
        return (
          <CommentItem
            level={el.level}
            name={el.name}
            text={el.text}
            commentKids={el.commentKids}
            avatar={el.avatar}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
