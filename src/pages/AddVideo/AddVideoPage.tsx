import { useEffect } from "react";
import AddLinkForm from "../../components/AddLinkForm/AddLinkForm";
import VideoPlayer from "../../components/VideoPlayer/Videoplayer";
import AddVideoForm from "../../modules/AddVideoForm/AddVideoForm";
import styles from "./styles.module.scss";

const AddVideoPage = () => {
  useEffect(() => {
    document.body.style.background = "#f3f3f3"
  }, [])
  return (
    <div className={`container ${styles.container}`}>
      <AddVideoForm />
    </div>
  );
};

export default AddVideoPage;
