import { MaterialListLinkProps } from "./interface";
import MaterialLink from "./MaterialLink/MaterialLink";
import styles from "./styles.module.scss";
import { FC } from "react";

const MaterialListLink: FC<MaterialListLinkProps> = ({
  className,
  links = [],
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {links.map((el) => {
        return (
          <MaterialLink text={el.text} href={el.href} className={styles.link} />
        );
      })}
    </div>
  );
};

export default MaterialListLink;
