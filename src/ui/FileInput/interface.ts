export interface FileInputProps{
    className?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    children?: React.ReactNode;
    accept?: string
    multiple?: boolean
}