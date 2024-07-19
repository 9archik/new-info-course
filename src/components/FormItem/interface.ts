export interface FormItemProps {
  name: string;
  nameChildren?: React.ReactNode;
  onClickName?: () => void;
  children: React.ReactNode;
  containerClassName?: string;
  childContainerClassName?: string;
  leftHeader?: React.ReactNode;
}
