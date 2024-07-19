import { BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";

export interface AvatarProps extends BaseComponentInterface{
    src?: string;
    alt?: string;
    width?: number;
    height?: number
}