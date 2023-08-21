import React, { FC } from 'react';
import '../../index.css';
export interface IBorderedInput {
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
declare const BorderedInput: FC<IBorderedInput>;
export default BorderedInput;
