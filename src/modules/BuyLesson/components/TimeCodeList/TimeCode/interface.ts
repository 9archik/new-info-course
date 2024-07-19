import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

export interface TimeCodeInfo {
    time: number;
    name: string;
}

export interface TimeCodeProps extends BaseComponentInterface, TimeCodeInfo{

}