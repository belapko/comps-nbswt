import { FC } from 'react';
import '../../index.css';
export interface ICarousel {
    photos?: string[];
    alt?: string;
    theme: string;
    width: string;
    height: string;
}
declare const Carousel: FC<ICarousel>;
export default Carousel;
