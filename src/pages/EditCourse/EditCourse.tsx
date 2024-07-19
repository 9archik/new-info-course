import CourseForm from "../../modules/CourseForm/CourseForm";
import styles from "./styles.module.scss";
import { useEffect } from "react";
const EditCoursePage = () => {
  useEffect(() => {
    document.body.style.background = "#f3f3f3";
  }, []);
  return (
    <div className="container">
      <CourseForm />
    </div>
  );
};

export default EditCoursePage;
