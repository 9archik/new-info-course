import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import { CourseItem } from "../../models/courseItem";


export interface CourseItemProps extends CourseItem, BaseComponentInterface{
    clickButtonDelete: React.MouseEventHandler ;
    link_to: string;
    className?: string;
    onCardClick: React.MouseEventHandler 
}

