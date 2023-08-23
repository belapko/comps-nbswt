import React, {FC, useState} from 'react';
import ArrowDown from './assets/down-arrow.svg';
import '../../index.css';
import styles from './dropdown.module.css';
import cn from 'classnames';
import {searchQueryFilter} from '../../util/searchQueryFilter';

export interface IOption {
    _id?: string;
    title?: string;
    search?: string;
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
}

const Dropdown: FC<IDropdown> = ({
                                     list,
                                     theme,
                                     title,
                                     chosen,
                                     setChosen,
                                     search = false,
                                     create = false,
                                     onCreate,
                                     multiple = false,
                                 }) => {
    const [active, setActive] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');

    const handleChangeQuery = (e: any) => { // any потому что вот эта шляпа - : React.ChangeEvent<HTMLInputElement> почему-то не работает
        setQuery(e.target.value)
    }

    return (
        <div className={cn(styles.dropdown)}>
            <button className={cn(styles.button, styles[theme], active && styles.active)}
                    onClick={() => setActive(!active)}>
                {multiple ? title : Object.keys(chosen).length ? (chosen as IOption).title : title}
                <ArrowDown className={cn(styles.arrow, styles[theme], active && styles.arrowUp)}/>
            </button>
            <div className={cn(styles.dropdownContent, styles[theme], active && styles.show)}>
                {search &&
                    <input className={cn(styles.input, styles[theme])} type='text' placeholder='Поиск...' value={query}
                           onChange={handleChangeQuery}/>}
                <ul className={cn(styles.ul)}>
                    {
                        searchQueryFilter(query, list).map((element: IOption) =>
                            <li className={cn(
                                styles.li, styles[theme], multiple ? (chosen as IOption[]).find(obj => obj._id)
                                    : (element._id === (chosen as IOption)._id) && styles.chosen)}
                                key={element._id} onClick={() => {
                                setChosen(element);
                                setActive(false);
                            }}>{element.title}</li>)
                    }
                </ul>
                {create && <button className={cn(styles.button, styles[theme])} onClick={onCreate}>Создать</button>}
            </div>
        </div>
    );
};

export default Dropdown;