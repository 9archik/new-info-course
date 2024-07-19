import { FC } from "react";
import styles from "./styles.module.scss";
import { TogglerProps } from "./interface";


const Toggler: FC<TogglerProps> = ({
  value,
  variants,
  onChange,
  className,
  name,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {variants.map((el, index) => {
        return (
          <label className={styles.btn} key={el.value}>
            <input
              name={name}
              onChange={() => {
                console.log("change");
                onChange(el.value);
              }}
              type={"radio"}
              value={el.value}
            />
            <span className={value === el.value ? styles.active : ""}>
              {el.text}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Toggler;
