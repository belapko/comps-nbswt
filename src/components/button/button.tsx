import React, { FC } from 'react';
import '../../index.css';
import styles from './button.module.css';
import cn from 'classnames';

export interface IButton {
    theme: string;
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<IButton> = ({ text, onClick, theme = 'dark', disabled = false }) => {
    return (
        <button className={cn(styles.button, styles[theme])} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
