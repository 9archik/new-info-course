import { BaseComponentButtonInterface, BaseComponentInterface } from "../../../shared/models/BaseComponentInterface";

export interface LikeButtonProps extends BaseComponentButtonInterface{
    active: boolean;
    mode?: 'like' | 'dislike'
}