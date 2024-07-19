export interface LinkStepProps
{
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    deleteClick: () => void;
}