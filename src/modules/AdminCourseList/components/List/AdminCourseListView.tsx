import { useState } from "react";
import { AdminCourseListProps } from "./interface";
import { FC } from "react";
import EmptyList from "./EmptyList/EmptyList";
import ListItem from "./ListItem/ListItem";

const AdminCourseListView: FC<AdminCourseListProps> = ({ data, loading }) => {
  
  if (loading) return <></>;

  if (data) {
    return data.length === 0 ? <EmptyList /> : <ListItem data={data} />;
  }

  return <></>;
};

export default AdminCourseListView;
