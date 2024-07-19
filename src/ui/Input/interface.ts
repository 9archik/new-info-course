export interface InputUI{
    onChange?:  React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    placeholder?: string;
    leftChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
    containerClassName?: string;
    inputClassName?: string;
    onClickLabel?: React.MouseEventHandler<HTMLDivElement>;
    type?: 'text' | 'number' | 'tel' | 'search',
    readonly?: boolean
}