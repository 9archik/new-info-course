import { FileListItemModel } from "../../../shared/models/FileListItemModel";
import { LinkListItem } from "../../../shared/models/LinkListItemModel";

export interface IStepLesson{
    value: string;
    links: LinkListItem[],
    attachments: FileListItemModel[],
}

