export interface ICardInfo{
    link_to: string;
    clickButtonDelete: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    img: string;
    alt: string;
    className: string;
    onCardClick?: React.MouseEventHandler
}