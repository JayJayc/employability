import {
    ButtonPlay,
    CarouselProvider,
    DotGroup,
    Image,
    Slide,
    Slider,
} from "pure-react-carousel";
import React, { useState } from "react";
import styles from "./../../styling/Carousel.module.css";

const Carousel = (props) => {
    const [slide, setSlide] = useState(0);
    return (
        <div className={styles.sliderContainer}>
            <CarouselProvider
                totalSlides={3}
                lockOnWindowScroll={true}
                naturalSlideWidth={130}
                naturalSlideHeight={120}
                // currentSlide={slide}
                isPlaying
                className={styles.carousel}
            >
                <Slider classNameAnimation={styles.slideTransition}>
                    <Slide
                        index={0}
                        classNameHidden={styles.slideHidden}
                        classNameVisible={styles.slideVisible}
                    >
                        <Image
                            src="/rsz_sliderimage1.jpg"
                            className={styles.image}
                        />
                    </Slide>
                    <Slide
                        index={1}
                        classNameHidden={styles.slideHidden}
                        classNameVisible={styles.slideVisible}
                    >
                        <Image
                            src="/rsz_sliderimage2.jpg"
                            className={styles.image}
                        />
                    </Slide>
                    <Slide
                        index={2}
                        classNameHidden={styles.slideHidden}
                        classNameVisible={styles.slideVisible}
                    >
                        <Image
                            src="/rsz_sliderimage3.jpg"
                            className={styles.image}
                        />
                    </Slide>
                </Slider>
                {/* <ButtonPlay childrenPlaying="Pause" childrenPaused="Play" /> */}
            </CarouselProvider>
        </div>
    );
};
export default Carousel;
