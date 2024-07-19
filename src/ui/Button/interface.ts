import { BaseComponentInterface } from "../../shared/models/BaseComponentInterface";

export interface ButtonUI extends BaseComponentInterface{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'submit' | 'button' | 'reset'
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}