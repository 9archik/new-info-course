import { FileListItemModel } from "../../../../shared/models/FileListItemModel";

export interface FormItemFilesProps{
    className?: string;
    addFile: React.ChangeEventHandler<HTMLInputElement>;
    deleteFile?: (index: number) => void;
    files: FileListItemModel[],
    multiple?: boolean,
    childrenFileInput?: React.ReactNode,
    formName?: string
}