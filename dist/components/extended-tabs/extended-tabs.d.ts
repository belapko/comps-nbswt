import React, { FC } from 'react';
import '../../index.css';
export interface ITab {
    id?: number;
    isCanClosed?: boolean;
    setClose?: React.Dispatch<React.SetStateAction<any>>;
    isInWindowTitle?: boolean;
    setWindowTitle?: () => void;
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
    setTabs?: React.Dispatch<React.SetStateAction<any>>;
}
declare const ExtendedTabs: FC<IExtendedTabs>;
export default ExtendedTabs;
