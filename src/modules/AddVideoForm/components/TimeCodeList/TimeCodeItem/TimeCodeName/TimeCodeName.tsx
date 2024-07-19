import styles from "./styles.module.scss";
import Input from "../../../../../../ui/Input/Input";
import { TimeCodeNameProps } from "./interface";
import { FC } from "react";

const TimeCodeName: FC<TimeCodeNameProps> = ({
  value,
  onChange,
  readonly = false,
}) => {
  return (
    <Input
      containerClassName={styles.timeCodeName}
      onChange={onChange}
      readonly={readonly}
      value={value}
    />
  );
};

export default TimeCodeName;
