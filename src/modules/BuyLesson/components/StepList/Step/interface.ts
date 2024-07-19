import { LinkInfo } from "../../../../../shared/models/LinkListItemModel";
import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

export interface StepInfo{
    description: string;
    attachments?: string[]
    links?: LinkInfo[]
}

export interface StepProps extends BaseComponentInterface, StepInfo
{
    step_number: number;
}