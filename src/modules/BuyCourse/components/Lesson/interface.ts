import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";

export interface LessonProps extends BaseComponentInterface{
    isCompleted: boolean;
    name: string;
}