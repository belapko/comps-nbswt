import React, {FC, useEffect, useState} from 'react';
import '../../index.css';
import styles from './extended-tabs.module.css';
import cn from 'classnames';
import Cross from './assets/cross.svg';

export interface ITab {
    id?: number;
    isCanClosed?: boolean; // Можно ли закрыть вкладку. Добавляет кнопку закрытия вкладки. (по умолчанию – false)
    setClose?: React.Dispatch<React.SetStateAction<any>>;
    isInWindowTitle?: boolean; // Транслируем ли заголовок вкладки в заголовке окна. (по умолчанию – false)
    setWindowTitle?: () => void;
    isIconFirst?: boolean; // Ставим ли иконку первой (по умолчанию - false)
    colorsSettings?: object; // Настройки цвета
    menu?: object[]; // Меню вкладки
    path: string; // Путь как указан в приложении для выделения активной вкладки
    name: string; // Название вкладки
    onClick: () => void;
    active?: boolean;
    setActive?: () => void;
    theme: string;
}

const Tab: FC<ITab> = ({
                           id,
                           isCanClosed = false,
                           setClose,
                           isInWindowTitle = false,
                           setWindowTitle,
                           isIconFirst = false,
                           colorsSettings,
                           menu,
                           name,
                           onClick,
                           active,
                           setActive,
                           theme
                       }) => {

    useEffect(() => {
        if (active && isInWindowTitle) setWindowTitle && setWindowTitle();
    }, [active]);

    const handleClick = () => {
        onClick();
        setActive && setActive();
    }

    return (
        <a className={cn(styles.tab, styles[theme], active && styles.active)}
           onClick={active ? undefined : handleClick}>
            <span>{name}</span>
            {isCanClosed && <span onClick={() => setClose && setClose(id)}><Cross className={cn(styles.cross, styles[theme])}/></span>}
        </a>
    );
};

export interface IExtendedTabs {
    theme: string;
    tabs: ITab[];
    setTabs: React.Dispatch<React.SetStateAction<any>>
}

const ExtendedTabs: FC<IExtendedTabs> = ({theme, tabs, setTabs}) => {
    const [active, setActive] = useState<number>(-1);
    const [close, setClose] = useState<number>(-1);

    useEffect(() => {
        const tabToClose = tabs[close];
        setTabs(tabs.filter(tab => tab !== tabToClose));
    }, [close]);

    return (
        <div className={cn(styles.navbar, styles[theme])}>
            {tabs.map((tab, index) => (
                <Tab path={tab.path} name={tab.name} theme={theme} onClick={tab.onClick} isCanClosed={tab.isCanClosed}
                     menu={tab.menu} setClose={setClose}
                     setWindowTitle={tab.setWindowTitle} id={index}
                     isInWindowTitle={tab.isInWindowTitle} isIconFirst={tab.isIconFirst}
                     colorsSettings={tab.colorsSettings}
                     active={tabs.indexOf(tab) === active} setActive={() => setActive(tabs.indexOf(tab))}/>
            ))}
        </div>
    );
};

export default ExtendedTabs;