import { BaseComponentInterface } from "../../shared/models/BaseComponentInterface";

export interface BottomPanelUI extends BaseComponentInterface
{
    className?: string;
    children?: React.ReactNode
    childrenMainButton: React.ReactNode;
    clickMainButton: () => void;
    typeButton?: 'reset' | 'button' | 'submit'
}