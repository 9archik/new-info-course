import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";

export interface BurgerMenuProps extends BaseComponentInterface {
  active: boolean;
  clickClose: () => void;
}
