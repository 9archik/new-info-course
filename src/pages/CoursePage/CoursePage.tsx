import { useEffect } from "react";
import BuyCourse from "../../modules/BuyCourse/BuyCourse";

const CoursePage = () => {
  useEffect(() => {
    document.body.style.background = "#fcfcfc";

  }, []);
  return (
    <div className="container">
      <BuyCourse />
    </div>
  );
};
export default CoursePage;
