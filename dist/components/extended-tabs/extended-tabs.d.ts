import { FC } from 'react';
import '../../index.css';
export interface ITab {
    isCanClosed?: boolean;
    isInWindowTitle?: boolean;
    isIconFirst?: boolean;
    colorsSettings?: object;
    menu?: object[];
    path: string;
    name: string;
    onClick: () => void;
    active?: boolean;
    setActive?: () => void;
    theme: string;
}
export interface IExtendedTabs {
    theme: string;
    tabs: ITab[];
}
declare const ExtendedTabs: FC<IExtendedTabs>;
export default ExtendedTabs;
