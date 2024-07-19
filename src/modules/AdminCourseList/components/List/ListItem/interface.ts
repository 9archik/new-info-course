import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";
import { CourseItem } from "../../../models/courseItem";

export interface ListCourseCardProps extends BaseComponentInterface{
    data: CourseItem[]
}