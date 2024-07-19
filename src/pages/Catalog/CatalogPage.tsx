import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";
import CatalogModule from "../../modules/CatalogModule/CatalogModule";
import { useEffect } from "react";

const CatalogPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <>
      <div className="container marginClientNavbar">
        <CatalogModule />
        <ClientNavbar />
      </div>
    </>
  );
};

export default CatalogPage;
