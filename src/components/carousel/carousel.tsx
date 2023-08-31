import React, { FC, useState } from 'react';
import '../../index.css';
import styles from './carousel.module.css';
import ArrowLeft from './assets/arrow-left.svg';
import ArrowRight from './assets/arrow-right.svg';
import cn from 'classnames';

export interface ICarousel {
    photos?: string[];
    alt?: string;
    theme: string;
    width: string;
    height: string;
}

const Carousel: FC<ICarousel> = ({ photos = [], alt='Карусель фотографий', theme, width, height }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === photos.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? photos.length - 1 : slide - 1);
    };

    return (
        <>
            <div className={styles.carousel}>
                <ArrowLeft className={cn(styles.arrow, styles.arrowLeft, styles[theme])} onClick={prevSlide} />
                {photos?.map((photo, index) => (
                    <img
                        className={`${styles.slide} ${
                            index === slide ? styles.slide : `${styles.slide} ${styles.slideHidden}`
                        }`}
                        width={width}
                        height={height}
                        key={index}
                        src={photo}
                        alt={alt}
                    />
                ))}
                <ArrowRight className={cn(styles.arrow, styles.arrowRight, styles[theme])} onClick={nextSlide} />
            </div>
            <span className={styles.indicators}>
                {photos?.map((_, index) => (
                    <button
                        className={cn(
                            styles.indicator,
                            styles[theme],
                            index === slide ? styles.indicator : cn(styles.indicator, styles.indicatorInactive)
                        )}
                        key={index}
                        onClick={() => setSlide(index)}
                    ></button>
                ))}
            </span>
        </>
    );
};

export default Carousel;
