import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";
import UserViewInfo from "../../modules/UserVIewInfo/UserViewInfo";
import { useEffect } from "react";

const LikesPage = () => {
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

export default LikesPage;
