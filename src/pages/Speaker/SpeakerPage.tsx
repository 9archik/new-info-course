import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";
import Speaker from "../../modules/Speaker/Speaker";
import { useEffect } from "react";

const SpeakerPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <>
      <div className="container marginClientNavbar">
        <Speaker />
        <ClientNavbar />
      </div>
    </>
  );
};

export default SpeakerPage;
