import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";

export interface FormItemPriceProps extends BaseComponentInterface{
    className?:string;
    name: string;
    onChange: (val: string) => void;
    value: string;
}