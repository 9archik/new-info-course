import SearchInput from "../../components/SearchInput/SearchInput";
import PageTitle from "../../ui/PageTitle/PageTitle";
import styles from "./styles.module.scss";
import avatar from "../../shared/images/preview.png";
import AccountCardInfo from "../../components/ClientComponents/AccountComponents/CardInfo/AccountCardInfo";
import { usePathname } from "../../shared/hooks/usePathname";

const UserViewInfo = () => {
  const pathname = usePathname();
  return (
    <>
      <PageTitle
        text={pathname === "/mylikes" ? "ЛАЙКИ" : "ИСТОРИЯ ПРОСМОТРОВ"}
        className={styles.title}
      />

      <SearchInput
        placeholder="Поиск"
        containerClassName={styles.searchInput}
      />

      <div>
        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 2. Тема такая-то в две и более строким"
          subtitle="сабтайтл"
          direction="row"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="Сабтайтл"
          direction="row"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="Сабтайтл"
          direction="row"
        />
      </div>
    </>
  );
};

export default UserViewInfo;
