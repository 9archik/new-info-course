import { FormItemProps } from "./interface";
import styles from "./styles.module.scss";
import { FC } from "react";
const FormItem: FC<FormItemProps> = ({
  name,
  nameChildren,
  onClickName,
  children,
  containerClassName,
  childContainerClassName,
  leftHeader,
}) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <div onClick={onClickName} className={styles.name}>
        {leftHeader}
        <span>{name}</span>
        {nameChildren}
      </div>

      <div className={`${styles.childCont} ${childContainerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default FormItem;
