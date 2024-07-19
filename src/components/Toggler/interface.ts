import { BaseComponentInterface } from "../../shared/models/BaseComponentInterface";

export interface TogglerModel {
  text: string;
  value: number | string;
}

export interface TogglerProps extends BaseComponentInterface {
  variants: TogglerModel[];
  onChange: (value: string | number) => void;
  value: string | number | null;
  name: string;
}
