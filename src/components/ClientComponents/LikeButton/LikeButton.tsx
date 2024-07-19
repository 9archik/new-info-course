import LikeSVG from "../../../shared/icons/LikeSVG";
import Button from "../../../ui/Button/Button";
import { LikeButtonProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";

const LikeButton: FC<LikeButtonProps> = ({
  className,
  active,
  onClick,
  mode = "like",
}) => {
  return (
    <Button
      onClick={onClick}
      className={`${styles.btn} ${active && styles.active} ${className}`}
    >
      <LikeSVG
        style={{
          transform:
            mode === "dislike"
              ? "rotate(180deg) translateY(-1px)"
              : "rotate(0deg)",
        }}
      />
    </Button>
  );
};

export default LikeButton;
