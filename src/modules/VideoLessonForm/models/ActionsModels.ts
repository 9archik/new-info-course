import { FileListItemModel } from "../../../shared/models/FileListItemModel";
import { LinkListItem } from "../../../shared/models/LinkListItemModel";

export interface ActionAddFiles {
  indexStep: number;
  files: FileListItemModel[];
}

export interface ActionAddLink {
  indexStep: number;
  link: LinkListItem;
}

export interface ActionChangeInput {
  indexStep: number;
  value: string;
}

export interface ActionDeleteFile {
  indexStep: number;
  indexFile: number;
}

export interface ActionDeleteLink {
  indexStep: number;
  indexLink: number;
}
