import { Link } from "react-router-dom";
import HomeSVG from "../../../shared/icons/HomeSVG";
import PlusSVG from "../../../shared/icons/PlusSVG";
import HumanSVG from "../../../shared/icons/HumanSVG";
import styles from "./styles.module.scss";
import CatalogSVG from "../../../shared/icons/CatalogSVG";
import { usePathname } from "../../../shared/hooks/usePathname";

const ClientNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className={`${styles.container}`}>
      <Link
        className={`${styles.link} ${pathname === "/head" && styles.active}`}
        to={"/head"}
      >
        <HomeSVG />
        <span>Главная</span>
      </Link>

      <Link
        className={`${styles.link} ${styles.catalog} ${
          pathname === "/catalog" && styles.active
        }`}
        to={"/catalog"}
      >
        <CatalogSVG />
        <span>Каталог</span>
      </Link>

      <Link
        className={`${styles.link} ${pathname === "/account" && styles.active}`}
        to={"/account"}
      >
        <HumanSVG />
        <span>Личный кабинет</span>
      </Link>
    </nav>
  );
};

export default ClientNavbar;
