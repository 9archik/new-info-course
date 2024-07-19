import { FC } from "react";
import styles from "./styles.module.scss";
import { LinkStepProps } from "./interface";
import Input from "../../../../../ui/Input/Input";
import DeleteSVG from "../../../../../shared/icons/DeleteSVG";
import Button from "../../../../../ui/Button/Button";
const LinkInput: FC<LinkStepProps> = ({ value, onChange, deleteClick }) => {
  return (
    <div className={styles.container}>
      <div>{value}</div>

      <Button onClick={deleteClick}>
        <DeleteSVG />
      </Button>
    </div>
  );
};

export default LinkInput;
