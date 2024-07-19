import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";

export interface AccountInfoProps extends BaseComponentInterface {
  avatar: string;
  name: string;
  username: string;

  status: string;
}
