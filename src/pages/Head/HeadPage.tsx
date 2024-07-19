import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";
import Head from "../../modules/Head/Head";
import styles from "./styles.module.scss";
import { useEffect } from "react";
const HeadPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <div className="container marginClientNavbar">
      <Head />

      <ClientNavbar />
    </div>
  );
};
export default HeadPage;
