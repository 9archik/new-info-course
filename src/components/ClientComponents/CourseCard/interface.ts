import { BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";

export interface CourseInfo {
  name: string;
  lesson_number: number;
  likes: number;
  comments: number;
  views: number;
}

export interface CourseCardProps extends CourseInfo, BaseComponentInterface {}
