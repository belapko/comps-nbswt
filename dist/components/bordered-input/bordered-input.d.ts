import React, { FC } from 'react';
import '../../index.css';
export interface IInput {
    theme: string;
    value: string;
    onChange: () => void;
    onBlur?: () => void;
    placeholder?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    disabled?: boolean;
    error?: boolean;
}
declare const BorderedInput: FC<IInput>;
export default BorderedInput;
