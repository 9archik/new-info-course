import { MutableRefObject, RefObject } from "react";
import { BaseComponentInterface } from "../../shared/models/BaseComponentInterface";

interface SelectItem{
    value: string | number,
    text: string | number;
}

export interface SelectProps extends BaseComponentInterface
{
    variants: SelectItem[]
    currentValue: SelectItem['value'] | null;
    dropDownRef?: MutableRefObject<any> | RefObject<any>
    dropDownClassName?: string;
    onChange: (val: string | number) => void;
}