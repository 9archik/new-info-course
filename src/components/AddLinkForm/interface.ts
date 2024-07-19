import { LinkInfo } from "../../shared/models/LinkListItemModel";


export interface AddLinkFormProps{
    isActive: boolean;
    submitClick: (value: LinkInfo) => void;
    closeClick: () => void;
}