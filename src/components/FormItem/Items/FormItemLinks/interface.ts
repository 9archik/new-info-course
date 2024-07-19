import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import { LinkListItem } from "../../../../shared/models/LinkListItemModel";
import { LinkInfo } from "../../../../shared/models/LinkListItemModel";

export interface FormItemLinksProps extends BaseComponentInterface{
    links: LinkListItem[]
    onClickAddBtn: (value: LinkInfo) => void
    className?:string;
    classNameLink?: string
    onClickDelete?: (index: number) => void
}