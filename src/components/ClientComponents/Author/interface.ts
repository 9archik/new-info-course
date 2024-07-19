import { BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";

export interface AuthorProps extends BaseComponentInterface
{
    name: string;
    role: string;
    avatar?: string
}