import { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import { AdminNavbarProps } from "./interface";
import { Link } from "react-router-dom";
import PlusSVG from "../../../shared/icons/PlusSVG";
import HomeSVG from "../../../shared/icons/HomeSVG";
import BookSVG from "../../../shared/icons/BookSVG";
import Button from "../../../ui/Button/Button";
import { usePathname } from "../../../shared/hooks/usePathname";
const AdminNavbar: FC<AdminNavbarProps> = ({
  className,
  ref,
  clickPlusBtn,
}) => {
  const pathname = usePathname();
  return (
    <nav ref={ref} className={`${styles.container} ${className}`}>
      <Link
        className={`${styles.link} ${pathname === "/head" && styles.active}`}
        to={"/head"}
      >
        <HomeSVG />
        <span>Главная</span>
      </Link>

      <Button onClick={clickPlusBtn} className={styles.plus}>
        <PlusSVG width={21} height={21} />
      </Button>

      <Link
        className={`${styles.link} ${pathname === "/" && styles.active}`}
        to={"/"}
      >
        <BookSVG />
        <span>Мои курсы</span>
      </Link>
    </nav>
  );
};

export default AdminNavbar;
