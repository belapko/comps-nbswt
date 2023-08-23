import { FC } from 'react';
import '../../index.css';
export interface ISwitch {
    id: string;
    theme: string;
    leftText?: string;
    rightText?: string;
    checked: boolean;
    onChange?: () => void;
    disabled?: boolean;
}
declare const Toggler: FC<ISwitch>;
export default Toggler;
