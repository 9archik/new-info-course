import VideoLessonForm from "../../modules/VideoLessonForm/VideoLessonForm";
import { useEffect } from "react";

const CreateVideoLessonPage = () => {
  useEffect(() => {
    document.body.style.background = "#f3f3f3";
  }, []);
  return (
    <div className="container">
      <VideoLessonForm />
    </div>
  );
};

export default CreateVideoLessonPage;
