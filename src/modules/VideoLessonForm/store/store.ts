import { FormModel } from "../models/LessonFormInterface";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { LinkInfo } from "../../../shared/models/LinkListItemModel";
import { LinkListItem } from "../../../shared/models/LinkListItemModel";
import { FileListItemModel } from "../../../shared/models/FileListItemModel";
import {
  ActionAddFiles,
  ActionAddLink,
  ActionChangeInput,
  ActionDeleteFile,
  ActionDeleteLink,
} from "../models/ActionsModels";

const initialState: FormModel = {
  name: "",
  description: "",
  links: [],
  files: [],
  price: "",
  preview: null,
  steps: [{ inputValue: "", links: [], files: [] }],
};

export const lessonFormSlice = createSlice({
  name: "lessonForm",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    addLink: (state, action: PayloadAction<LinkListItem>) => {
      state.links.push(action.payload);
    },
    deleteLink: (state, action: PayloadAction<number>) => {
      state.links.splice(action.payload, 1);
    },
    addFile: (state, action: PayloadAction<FileListItemModel[]>) => {
      state.files.push(...action.payload);
    },
    deleteFile: (state, action: PayloadAction<number>) => {
      state.files.splice(action.payload, 1);
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setPreview: (state, action: PayloadAction<FileListItemModel>) => {
      state.preview = action.payload;
    },
    deletePreview: (state) => {
      state.preview = null;
    },
    addStep: (state) => {
      state.steps.push({ inputValue: "", links: [], files: [] });
    },
    deleteStep: (state, action: PayloadAction<number>) => {
      state.steps.splice(action.payload, 1);
    },
    addFilesToStep: (state, action: PayloadAction<ActionAddFiles>) => {
      state.steps[action.payload.indexStep].files.push(...action.payload.files);
    },
    addLinkToStep: (state, action: PayloadAction<ActionAddLink>) => {
      state.steps[action.payload.indexStep].links.push(action.payload.link);
    },
    deleteFileFromStep: (state, action: PayloadAction<ActionDeleteFile>) => {
      state.steps[action.payload.indexStep].files.splice(
        action.payload.indexFile,
        1
      );
    },
    deleteLinkFromStep: (state, action: PayloadAction<ActionDeleteLink>) => {
      state.steps[action.payload.indexStep].links.splice(
        action.payload.indexLink,
        1
      );
    },
    setInputStep: (state, action: PayloadAction<ActionChangeInput>) => {
      state.steps[action.payload.indexStep].inputValue = action.payload.value;
    },
  },
});

export const {
  setName,
  setDescription,
  addFile,
  deleteFile,
  addLink,
  deleteLink,
  setPrice,
  deletePreview,
  setPreview,
  addStep,
  addFilesToStep,
  addLinkToStep,
  deleteFileFromStep,
  deleteLinkFromStep,
  deleteStep,
  setInputStep,
} = lessonFormSlice.actions;

export default lessonFormSlice.reducer;
