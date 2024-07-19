import { BaseComponentInterface } from "../../../../shared/models/BaseComponentInterface";
import { CommentText } from "./Text/interface";
import { UserInfo } from "./User/interface";

export interface CommentModel extends UserInfo, CommentText {
  commentKids?: CommentModel[];
  level: number;
}

export interface CommentItemProps
  extends BaseComponentInterface,
    CommentModel {}
