
export interface LinkInfo{
    
    text: string;
    href: string
}

export interface LinkListItem extends LinkInfo
{
    id: string | number;
}