import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

export interface CommentText {
  text: string;
}

export interface CommentTextProps extends BaseComponentInterface, CommentText {}
