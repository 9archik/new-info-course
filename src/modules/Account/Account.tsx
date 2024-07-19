import AccountInfo from "../../components/ClientComponents/AccountComponents/AccountInfo/AccountInfo";
import AccountCardInfo from "../../components/ClientComponents/AccountComponents/CardInfo/AccountCardInfo";
import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";
import avatar from "../../shared/images/preview.png";
import Section from "./components/Section/Section";
import styles from "./styles.module.scss";

const Account = () => {
  return (
    <>
      <AccountInfo
        name="Иванов иван"
        username="@username"
        avatar={avatar}
        status="Студент"
      />

      <Section to={"/history"} name="История" />

      <div className={styles.list}>
        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 2. Тема такая-то в две и более строким"
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 2. Тема такая-то в две и более строким"
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />
        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />
      </div>

      <Section to={"/mylikes"} name="Мои лайки" />

      <div className={styles.list}>
        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />

        <AccountCardInfo
          className={styles.listItem}
          preview={avatar}
          progress={30}
          title="Урок 1."
          subtitle="сабтайтл"
          direction="column"
        />
      </div>


    </>
  );
};
export default Account;
