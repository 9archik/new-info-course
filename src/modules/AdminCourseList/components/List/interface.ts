import { CourseItem } from "../../models/courseItem";

export interface AdminCourseListProps{
    data: null | CourseItem[],
    loading: boolean;
}