import { FC } from 'react';
import '../../index.css';
interface IOption {
    _id?: string;
    title?: string;
}
export interface IDropdown {
    list: IOption[];
    theme: string;
    title: string;
    chosen: IOption;
    setChosen: () => void;
}
declare const Dropdown: FC<IDropdown>;
export default Dropdown;
