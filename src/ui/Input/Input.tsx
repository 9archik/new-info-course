import { InputUI } from "./interface";
import { FC } from "react";
import styles from "./styles.module.scss";

const Input: FC<InputUI> = ({
  leftChildren,
  rightChildren,
  onChange,
  value,
  containerClassName,
  placeholder,
  inputClassName,
  onClickLabel,
  type='text',
  readonly=false,
}) => {
  
  return (
    <div onClick={onClickLabel} className={`${containerClassName} ${styles.container}`}>
      {leftChildren}
      <input readOnly={readonly} onChange={onChange} className={inputClassName} placeholder={placeholder} value={value} type={type} />
      {rightChildren}
    </div>
  );
};

export default Input;
