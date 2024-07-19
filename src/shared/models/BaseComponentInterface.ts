import { MutableRefObject, RefObject } from "react";

export interface BaseComponentInterface{
    className?: string;
    style?: React.CSSProperties;
    ref?: RefObject<any> | MutableRefObject<any>
    children?: React.ReactNode
    onTouchStart?: React.TouchEventHandler<any> | undefined
}


export interface BaseComponentButtonInterface extends BaseComponentInterface{
    onClick:  React.MouseEventHandler<HTMLButtonElement>
}