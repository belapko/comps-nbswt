import React, {FC, useState} from 'react';
import ArrowDown from './assets/down-arrow.svg';
import '../../index.css';
import styles from './dropdown.module.css';
import cn from 'classnames';

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

const Dropdown: FC<IDropdown> = ({list, theme, title, chosen, setChosen}) => {
    const [active, setActive] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');

    const handleChangeQuery = (e: any) => { // any потому что вот эта шляпа - : React.ChangeEvent<HTMLInputElement> почему-то не работает
        setQuery(e.target.value)
    }

    return (
        <div>
            <button className={cn(styles.button, styles[theme], active && styles.active)} onClick={() => setActive(!active)}>{Object.keys(chosen).length ? chosen.title : title}
                <ArrowDown className={cn(styles.arrow, styles[theme], active && styles.arrowUp)}/>
            </button>
            <div>
                <input type='text' placeholder='Поиск...' value={query} onChange={handleChangeQuery}/>
            </div>
        </div>
    );
};

export default Dropdown;