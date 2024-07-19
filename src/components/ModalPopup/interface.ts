export interface ModalPopupProps{
    header?: string;
    clickClose: () => void;
    className?: string;
    children?: React.ReactNode;
    headerClassName?: string;
}