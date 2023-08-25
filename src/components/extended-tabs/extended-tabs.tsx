import React, {FC, useState} from 'react';
import '../../index.css';
import styles from './extended-tabs.module.css';
import cn from 'classnames';

interface ITab {
    isCanClosed?: boolean; // Можно ли закрыть вкладку. Добавляет кнопку закрытия вкладки. (по умолчанию – false)
    isInWindowTitle?: boolean; // Транслируем ли заголовок вкладки в заголовке окна. (по умолчанию – false)
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
                           isCanClosed = false,
                           isInWindowTitle = false,
                           isIconFirst = false,
                           colorsSettings,
                           menu,
                           name,
                           onClick,
                           active,
                           setActive,
                           theme
                       }) => {
    const handleClick = () => {
        onClick();
        setActive && setActive();
    }

    return (
        <a className={cn(styles.tab, styles[theme], active && styles.active)} onClick={handleClick}>{name}</a>
    );
};

export interface IExtendedTabs {
    theme: string;
    tabs: ITab[];
}

const ExtendedTabs: FC<IExtendedTabs> = ({theme, tabs}) => {
    const [active, setActive] = useState<number>(-1);

    return (
        <nav className={cn(styles.navbar, styles[theme])}>
            {tabs.map(tab => (
                <Tab path={tab.path} name={tab.name} theme={theme} onClick={tab.onClick}
                     active={tabs.indexOf(tab) === active} setActive={() => setActive(tabs.indexOf(tab))}/>
            ))}
        </nav>
    );
};

export default ExtendedTabs;