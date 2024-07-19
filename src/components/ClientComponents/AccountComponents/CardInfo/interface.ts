import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";

export interface AccountCardInfoProps extends BaseComponentInterface {
  preview: string;
  progress: number;
  direction?: "row" | "column";
  title: string;
  subtitle: string
}
