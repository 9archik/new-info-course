import { FC } from "react";
import styles from "./styles.module.scss";
import { AvatarProps } from "./interface";
const Avatar: FC<AvatarProps> = ({ src, className, alt, height, width }) => {
  return (
    <img
      height={height}
      width={width}
      className={`${styles.img} ${className}`}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
