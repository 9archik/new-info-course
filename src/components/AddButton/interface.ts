import { ButtonUI } from "../../ui/Button/interface";

export interface AddLinkButtonProps extends Partial<ButtonUI> {
    children?: React.ReactNode
    onClick: () => void
}