import { FileListItemModel } from "../../../../shared/models/FileListItemModel";
import { LinkListItem } from "../../../../shared/models/LinkListItemModel";

export interface StepLessonModel{
    inputValue: string;
    links: LinkListItem[],
    files: FileListItemModel[]

}

export interface StepLessonProps extends StepLessonModel{
    onChangeInput?:  React.ChangeEventHandler<HTMLTextAreaElement>;
    stepNumber: number;
}