import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import { TimeCodeInfo } from "./TimeCode/interface";

export interface TimeCodeListProps extends BaseComponentInterface
{
    timecodes: TimeCodeInfo[]
}