import { BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";
import { LinkInfo } from "../../../shared/models/LinkListItemModel";

export interface MaterialListLinkProps extends BaseComponentInterface
{
    links?: LinkInfo[]
}