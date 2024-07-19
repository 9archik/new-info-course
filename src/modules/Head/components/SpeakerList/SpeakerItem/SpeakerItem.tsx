import { FC } from "react";
import Avatar from "../../../../../components/ClientComponents/Avatar/avatar";
import styles from "./styles.module.scss";
import { SpeakerItemProps } from "./interface";
import { Link } from "react-router-dom";

const SpeakerItem: FC<SpeakerItemProps> = ({ avatar, name, to, className }) => {
  return (
    <Link to={to} className={styles.container}>
      <Avatar className={styles.avatar} src={avatar} alt={`avatar ${name}`} />
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default SpeakerItem;
