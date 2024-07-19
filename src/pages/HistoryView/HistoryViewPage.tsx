import UserViewInfo from "../../modules/UserVIewInfo/UserViewInfo";
import { useEffect } from "react";
import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";

const HistoryViewPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <div className="container marginClientNavbar">
      <UserViewInfo />
      <ClientNavbar />
    </div>
  );
};

export default HistoryViewPage;
