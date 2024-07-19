import { FC } from "react";
import { MaterialDescriptionProps } from "./interface";
import styles from "./styles.module.scss";
const MaterialDescription: FC<MaterialDescriptionProps> = ({
  className,
  text = "Lorem ipsum dolor sit amet consectetur. Mollis donec hendrerit congue tincidunt malesuada lobortis habitasse at rhoncus. Tortor id ipsum sapien eu morbi at lectus",
}) => {
  return <div className={`${styles.descr} ${className}`}>{text}</div>;
};

export default MaterialDescription;
