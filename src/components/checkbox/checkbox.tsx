import React, { FC } from 'react';
import '../../index.css';
import styles from './checkbox.module.css';

export interface ICheckbox {
    id?: string;
    label?: string;
    checked: boolean;
    onChange: () => void;
    readOnly?: boolean;
}

const Checkbox: FC<ICheckbox> = ({id='checkbox', label='', checked, onChange, readOnly=false}) => {
    return (
        <>
            <input id={id} className={styles.checkbox} type='checkbox' readOnly={readOnly} checked={checked} onChange={onChange}/>
            <label htmlFor={id}>{label}</label>
        </>
    );
};

export default Checkbox;
