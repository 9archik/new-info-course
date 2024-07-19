import ArrowSVG from "../../../shared/icons/ArrowSVG";
import PageTitle from "../../../ui/PageTitle/PageTitle";
import Button from "../../../ui/Button/Button";
import styles from "./styles.module.scss";
import { MaterialNameProps } from "./interface";
import { FC } from "react";
const MaterialName: FC<MaterialNameProps> = ({
  toggleButton,
  className,
  name,
  isActive,
}) => {
  return (
    <Button
      onClick={toggleButton}
      className={`${styles.container} ${className}`}
    >
      <PageTitle className={styles.title} text={name} />

      <ArrowSVG
        style={{ transform: isActive ? "rotate(0deg)" : "rotate(180deg)" }}
      />
    </Button>
  );
};

export default MaterialName;
