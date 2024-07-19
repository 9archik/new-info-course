import BucketSVG from "../../shared/icons/BucketSVG";
import PenSVG from "../../shared/icons/PenSVG";
import { ICardInfo } from "./interface";
import styles from "./styles.module.scss";
import Button from "../../ui/Button/Button";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
const CardInfo: FC<ICardInfo> = ({
  link_to,
  clickButtonDelete,
  img,
  alt,
  children,
  className,
  onCardClick,
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={onCardClick} className={`${styles.container} ${className}`}>
      <div className={styles.image}>
        <img src={img} alt={alt} />
      </div>
      {children}

      <div className={styles.btns}>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            navigate(link_to);
          }}
        >
          <PenSVG />
        </Button>
        <Button onClick={clickButtonDelete}>
          <BucketSVG />
        </Button>
      </div>
    </div>
  );
};

export default CardInfo;
