export interface ConfirmWindowProps{
    cancelButtonChild?: React.ReactNode;
    confirmButtonChild?: React.ReactNode;
    infoText: string;
    boldText: string;
    cancelClick: () => void
    confirmClick: () => void
}