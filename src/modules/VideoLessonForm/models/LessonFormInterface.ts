import { LinkInfo } from "../../../shared/models/LinkListItemModel";
import { FileListItemModel } from "../../../shared/models/FileListItemModel";
import { LinkListItem } from "../../../shared/models/LinkListItemModel";
import { StepLessonModel } from "../components/Step/interface";

export interface FormModel{
    name: string;
    description: string;
    links: LinkListItem[]
    files: FileListItemModel[]
    price: string;
    preview: FileListItemModel | null
    steps: StepLessonModel[]
}