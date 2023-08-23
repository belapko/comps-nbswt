import { FC } from 'react';
import '../../index.css';
export interface IOption {
    _id?: string;
    title?: string;
    search?: string;
    photo?: string;
}
export interface IDropdown {
    list: IOption[];
    theme: string;
    title: string;
    chosen: IOption | IOption[];
    setChosen: (obj: object) => void;
    search?: boolean;
    create?: boolean;
    onCreate?: () => void;
    multiple?: boolean;
    photo?: boolean;
}
declare const Dropdown: FC<IDropdown>;
export default Dropdown;
