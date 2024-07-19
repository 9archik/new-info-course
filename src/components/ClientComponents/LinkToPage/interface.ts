import { BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";

export interface LinkToPageProps extends BaseComponentInterface {
  text?: string;
  to?: string;
}
