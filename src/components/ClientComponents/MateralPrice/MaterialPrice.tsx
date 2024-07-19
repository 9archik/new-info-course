import { FC } from "react";
import styles from "./styles.module.scss";
import { MaterialPriceProps } from "./interface";
const MaterialPrice: FC<MaterialPriceProps> = ({className, price}) => {
  return <div className={`${styles.container} ${className}`}>{price} ₽</div>;
};

export default MaterialPrice;
