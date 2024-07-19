import PageTitle from "../../ui/PageTitle/PageTitle";
import AdminCourseList from "../../modules/AdminCourseList/AdminCourseList";
import BottomButtonPanel from "../../ui/BottomButtonPanel/BottomButtonPanel";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import AdminNavbar from "../../components/Navbar/Admin/AdminNavbar";
import VideoPlayer from "../../components/VideoPlayer/Videoplayer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminCourseListPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.background = "#f3f3f3";
  }, []);

  return (
    <>
      <div className="container h-full">
        <div className={styles.header}>
          <PageTitle text="КУРСЫ" />
          <Link to={"/createCourse"}>Создать курс</Link>
        </div>

        <AdminCourseList />
      </div>

      <AdminNavbar
        clickPlusBtn={() => {
          navigate("/createCourse");
        }}
      />
    </>
  );
};

export default AdminCourseListPage;
