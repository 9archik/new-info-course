import { LinkInfo } from "../../../shared/models/LinkListItemModel";
import { FileListItemModel } from "../../../shared/models/FileListItemModel";
import { LinkListItem } from "../../../shared/models/LinkListItemModel";
export interface FormModel{
    name: string;
    theme: number | string | null;
    description: string;
    links: LinkListItem[]
    files: FileListItemModel[]
    price: string;
    preview: FileListItemModel | null
}