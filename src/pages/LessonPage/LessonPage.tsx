import { useEffect } from "react";
import BuyLesson from "../../modules/BuyLesson/BuyLesson";
import ClientNavbar from "../../components/Navbar/Client/СlientNavbar";

const LessonPage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";
  }, []);
  return (
    <div className="container marginClientNavbar">
      <BuyLesson />
    </div>
  );
};

export default LessonPage;
