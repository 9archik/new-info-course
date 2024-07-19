import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";
import SpeakerList from "../../modules/SpeakerList/SpeakerList";
import { useEffect } from "react";

const SpeakerListPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <div className="container marginClientNavbar">
      <SpeakerList />
      <ClientNavbar />
    </div>
  );
};

export default SpeakerListPage;
