import SearchInput from "../../../../components/SearchInput/SearchInput";
import styles from "./styles.module.scss";
import Button from "../../../../ui/Button/Button";
import BurgerSVG from "../../../../shared/icons/BurgerSVG";
import { HeaderProps } from "./interace";
import { FC } from "react";
const Header: FC<HeaderProps> = ({ clickBurger }) => {
  return (
    <header className={styles.header}>
      <SearchInput
        placeholder="Поиск"
        containerClassName={styles.searchInput}
      />
      <Button
        onClick={() => {
          clickBurger();
        }}
        className={styles.burgerBtn}
      >
        <BurgerSVG />
      </Button>
    </header>
  );
};
export default Header;
