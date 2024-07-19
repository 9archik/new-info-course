import SearchInput from "../../components/SearchInput/SearchInput";
import { useState } from "react";
import { CourseItem } from "./models/courseItem";
import AdminCourseListView from "./components/List/AdminCourseListView";

const DATA: CourseItem[] = [
  { title: "Искусственный интелект", theme: "Тема такая-то" },
  { title: "Искусственный интелект", theme: "Тема такая-то" },
  { title: "Искусственный интелект", theme: "Тема такая-то" },
  { title: "Искусственный интелект", theme: "Тема такая-то" },
];

const AdminCourseList = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const [courseList, setCourseList] = useState<CourseItem[] | null>(null);
  return (
    <>
      <SearchInput
        placeholder="Поиск"
        value={searchValue}
        onChange={handleSearch}
      />

      <AdminCourseListView data={DATA} loading={false} />
    </>
  );
};

export default AdminCourseList;
