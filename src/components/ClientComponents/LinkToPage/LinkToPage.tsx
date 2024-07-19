import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { LinkToPageProps } from "./interface";
import { FC } from "react";
import ArrowSVG from "../../../shared/icons/ArrowSVG";
const LinkToPage: FC<LinkToPageProps> = ({ to, text = "Смотреть все" }) => {
  if (to) {
    return (
      <Link className={styles.link} to={to}>
        <span>{text}</span>
        <ArrowSVG style={{ transform: "rotate(90deg)" }} />
      </Link>
    );
  } else {
    return (
      <div className={styles.link}>
        <span>{text}</span>
        <ArrowSVG style={{ transform: "rotate(90deg)" }} />
      </div>
    );
  }
};

export default LinkToPage;
