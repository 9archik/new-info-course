import React from "react";

import "./App.scss";
import BottomButtonPanel from "../ui/BottomButtonPanel/BottomButtonPanel";
import Input from "../ui/Input/Input";
import { useState } from "react";
import FileName from "../ui/FileName/FileName";
import Textarea from "../ui/Textarea/textarea";
import { Route, Routes } from "react-router-dom";
import AdminCourseListPage from "../pages/AdminCourseList/AdminCourseListPage";
import CreateVideoLessonPage from "../pages/CreateVideoLesson/CreateVideoLessonPage";
import CreateCoursePage from "../pages/CreateCourse/CreateCoursePage";
import AddVideoPage from "../pages/AddVideo/AddVideoPage";
import CoursePage from "../pages/CoursePage/CoursePage";
import LessonPage from "../pages/LessonPage/LessonPage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import SpeakerPage from "../pages/Speaker/SpeakerPage";
import SpeakerListPage from "../pages/SpeakerList/SpeakerListPage";
import AccountPage from "../pages/Account/AccountPage";
import LikesPage from "../pages/Likes/LikesPage";
import HistoryViewPage from "../pages/HistoryView/HistoryViewPage";
import HeadPage from "../pages/Head/HeadPage";
import CommentsPage from "../pages/Comments/CommentsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminCourseListPage />} />
        <Route path="/createLesson" element={<CreateVideoLessonPage />} />
        <Route path="/createCourse" element={<CreateCoursePage />} />
        <Route path="/editCourse" element={<CreateCoursePage />} />
        <Route path="/addVideo" element={<AddVideoPage />} />
        <Route path="/buyCourse" element={<CoursePage />} />
        <Route path="/buyLesson" element={<LessonPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/speakerInfo" element={<SpeakerPage />} />
        <Route path="/speakerList" element={<SpeakerListPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/mylikes" element={<LikesPage />} />
        <Route path="/history" element={<HistoryViewPage />} />
        <Route path="/head" element={<HeadPage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </>
  );
}

export default App;
