import React, { FC } from 'react';
import '../../index.css';
import styles from './toggler.module.css';
import cn from 'classnames';

export interface ISwitch {
    id: string;
    theme: string;
    leftText?: string;
    rightText?: string;
    checked: boolean;
    onChange?: () => void;
    disabled?: boolean;
}

const Toggler: FC<ISwitch> = ({ id, theme, leftText, rightText, checked, onChange, disabled = false }) => {
    return (
        <div className={styles.switch}>
            {leftText && <p className={cn(styles.p, styles[theme])}>{leftText}</p>}
            <input
                id={id}
                className={cn(styles.input, styles.hide, styles[theme])}
                type='checkbox'
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            <label className={cn(styles.label, styles[theme])} htmlFor={id}></label>
            {rightText && <p className={cn(styles.p, styles[theme])}>{rightText}</p>}
        </div>
    );
};

export default Toggler;
