import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimeCodeItem } from "../components/TimeCodeList/TimeCodeItem/interface";
import {
  ActionAddTimeCode,
  ActionEditNameTimeCode,
  ActionEditSecondsTimeCode,
} from "../models/actionsModels";

const initialState: TimeCodeItem[] = [
  {
    curTime: 0,
    name: "Бесплатный просмотр",
    deleteMode: false,
    readonly: true,
    id: new Date().getMilliseconds(),
  },
];

export const addVideoFormSlice = createSlice({
  name: "addVideoForm",
  initialState,
  reducers: {
    addTimeCode: (state, action: PayloadAction<ActionAddTimeCode>) => {
      let elem: TimeCodeItem = {
        curTime: action.payload.curTime,
        name: "",
        deleteMode: true,
        readonly: false,
        id: new Date().getMilliseconds(),
      };

      state.push(elem);
    },
    deleteTimeCode: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    editSecondsTimeCode: (
      state,
      action: PayloadAction<ActionEditSecondsTimeCode>
    ) => {
      state[action.payload.index].curTime = action.payload.curTime;
    },
    editNameTimeCode: (
      state,
      action: PayloadAction<ActionEditNameTimeCode>
    ) => {
      state[action.payload.index].name = action.payload.name;
    },
  },
});

export const {
  addTimeCode,
  deleteTimeCode,
  editSecondsTimeCode,
  editNameTimeCode,
} = addVideoFormSlice.actions;

export default addVideoFormSlice.reducer;
