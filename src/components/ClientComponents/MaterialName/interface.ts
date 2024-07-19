import { BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";

export interface MaterialNameProps extends BaseComponentInterface{
    name: string;
    toggleButton: React.MouseEventHandler<HTMLButtonElement>;
    isActive: boolean
}