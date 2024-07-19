import { FC } from "react";
import styles from "./styles.module.scss";
import { ButtonUI } from "./interface";
const Button: FC<ButtonUI> = ({
  onClick,
  type = "button",
  className,
  children,
  ref,
  onTouchStart,
  disabled = false,
}) => {
  return (
    <button
      onTouchStart={onTouchStart}
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.container} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
