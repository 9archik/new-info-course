import { FormModel } from "../models/interface";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { LinkInfo } from "../../../shared/models/LinkListItemModel";
import { LinkListItem } from "../../../shared/models/LinkListItemModel";
import { FileListItemModel } from "../../../shared/models/FileListItemModel";

const initialState: FormModel = {
   name: '',
   theme: null,
   description: '',
   links: [],
   files: [],
   price: '',
   preview: null
}


export const courseFormSlice = createSlice({
  name: 'courseForm',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    setTheme: (state, action: PayloadAction<string | number>) => {
        state.theme = action.payload
    },
    addLink: (state, action: PayloadAction<LinkListItem>) => {
        state.links.push(action.payload)
    },
    deleteLink: (state, action: PayloadAction<number>) => {
        state.links.splice(action.payload, 1)
    },
    addFile: (state, action: PayloadAction<FileListItemModel[]>) => {
        state.files.push(...action.payload)
    },
    deleteFile: (state, action: PayloadAction<number>) => {
        state.files.splice(action.payload, 1)
    },
    setPrice: (state, action: PayloadAction<string>) => {
        state.price = action.payload
    },
    setPreview: (state, action: PayloadAction<FileListItemModel>) => {
      state.preview = action.payload
    },
    deletePreview: (state) => {
      state.preview = null
    },

    
  },
})

export const { setName, setDescription, setTheme, addFile, deleteFile, addLink, deleteLink, setPrice, deletePreview,setPreview } = courseFormSlice.actions

export default courseFormSlice.reducer