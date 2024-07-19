import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import { StepInfo } from "./Step/interface";

export interface StepListProps extends BaseComponentInterface
{
    steps: StepInfo[]
}