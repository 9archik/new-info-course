import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

export interface TimeCodeItem {
  curTime: number;
  name: string;
  deleteMode?: boolean;
  readonly?: boolean;
  id: number | string;
}

export interface TimeCodeItemProps
  extends BaseComponentInterface,
    Omit<TimeCodeItem, "id"> {
  deleteClick: () => void;
  onChangeName?: React.ChangeEventHandler<HTMLInputElement>;
}
