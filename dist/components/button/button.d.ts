import { FC } from "react";
import '../../index.css';
export interface IButton {
    theme: string;
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}
declare const Button: FC<IButton>;
export default Button;
