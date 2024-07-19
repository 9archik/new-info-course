import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";

export interface TextInputProps extends BaseComponentInterface{
    value?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    className?: string;
    name: string;
}

