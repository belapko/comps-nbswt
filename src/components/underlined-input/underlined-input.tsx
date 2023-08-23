import React, {FC} from 'react';
import '../../index.css';
import styles from './underlined-input.module.css';
import cn from 'classnames';
import {IInput} from '../bordered-input/bordered-input';

const UnderlinedInput: FC<IInput> = ({
                                         value,
                                         onChange,
                                         onBlur,
                                         placeholder,
                                         label = '',
                                         type,
                                         disabled,
                                         theme,
                                         error = false,
                                     }) => {
    return (
        <div className={cn(styles.container, styles[theme])}>
            <label className={cn(styles.label, styles[theme])}>{label}</label>
            <input className={cn(styles.input, styles[theme])} type={type} disabled={disabled} placeholder={placeholder}
                   value={value} onChange={onChange} onBlur={onBlur}/>
        </div>
    );
};

export default UnderlinedInput;