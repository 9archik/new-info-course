import { BaseComponentInterface } from "../../../../../shared/models/BaseComponentInterface";

export interface UserInfo{
    avatar: string;
    name: string
}

export interface UserInfoProps extends BaseComponentInterface, UserInfo{}