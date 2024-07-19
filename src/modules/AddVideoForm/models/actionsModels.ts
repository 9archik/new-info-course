export interface ActionAddTimeCode {
  curTime: number;
}

export interface ActionEditSecondsTimeCode {
  index: number;
  curTime: number;
}

export interface ActionEditNameTimeCode {
  index: number;
  name: string;
}
