import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";
import Account from "../../modules/Account/Account";
import { useEffect } from "react";

const AccountPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <div className="container marginClientNavbar">
      <Account />
      <ClientNavbar />
    </div>
  );
};

export default AccountPage;
