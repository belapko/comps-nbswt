import React, {FC} from 'react';
import '../../index.css';
import styles from './bordered-input.module.css';
import cn from 'classnames';

export interface IInput {
    theme: string;
    value: string;
    onChange: () => void;
    onBlur?: () => void;
    placeholder?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    accept?: string;
    disabled?: boolean;
    error?: boolean;
}

const BorderedInput: FC<IInput> = ({
                                       value,
                                       onChange,
                                       onBlur,
                                       placeholder,
                                       label = '',
                                       type,
                                       accept,
                                       disabled,
                                       theme,
                                       error = false,
                                   }) => {
    return (
        <div className={styles.inputForm}>
            <label className={cn(styles.label, styles[theme])}>{label}</label>
            <input className={cn(styles.input, styles[theme], error && styles.error)} type={type} accept={accept}
                   placeholder={placeholder} disabled={disabled} value={value} onChange={onChange} onBlur={onBlur}/>
        </div>
    );
};

export default BorderedInput;