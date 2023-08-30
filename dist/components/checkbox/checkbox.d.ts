import { FC } from 'react';
import '../../index.css';
export interface ICheckbox {
    id?: string;
    label?: string;
    checked: boolean;
    onChange: () => void;
    readOnly?: boolean;
}
declare const Checkbox: FC<ICheckbox>;
export default Checkbox;
