import React, { useCallback, useEffect, useState } from "react";

import styles from "./../../styling/Carousel.module.css";

import Swiper from "react-id-swiper";

const CenteredSlides = (props) => {
    const { currentIndex, updateCurrentIndex } = props;
    const [swiper, updateSwiper] = useState(null);
    const updateIndex = useCallback(
        () => updateCurrentIndex(swiper.realIndex),
        [swiper]
    );

    const params = {
        effect: "coverflow",
        grabCursor: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
        getSwiper: updateSwiper, // Get swiper instance callback
    };
    // Add eventlisteners for swiper after initializing
    useEffect(() => {
        if (swiper !== null) {
            swiper.on("slideChange", updateIndex);
        }

        return () => {
            if (swiper !== null) {
                swiper.off("slideChange", updateIndex);
            }
        };
    }, [swiper, updateIndex]);
    return (
        <React.Fragment>
            <Swiper {...params}>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceCardHead}>
                        <div className={styles.serviceCardTitle}>Title1</div>
                        <div className={styles.serviceCardBanner}>
                            Slide #1 banner
                        </div>
                    </div>
                    <div className={styles.serviceCardBody}>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                            <li className={styles.serviceListItem}>Item 4</li>
                            <li className={styles.serviceListItem}>Item 5</li>
                            <li className={styles.serviceListItem}>Item 6</li>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceCardHead}>
                        <div className={styles.serviceCardTitle}>Title1</div>
                        <div className={styles.serviceCardBanner}>
                            Slide #1 banner
                        </div>
                    </div>
                    <div className={styles.serviceCardBody}>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                            <li className={styles.serviceListItem}>Item 4</li>
                            <li className={styles.serviceListItem}>Item 5</li>
                            <li className={styles.serviceListItem}>Item 6</li>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceCardHead}>
                        <div className={styles.serviceCardTitle}>Title1</div>
                        <div className={styles.serviceCardBanner}>
                            Slide #1 banner
                        </div>
                    </div>
                    <div className={styles.serviceCardBody}>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                            <li className={styles.serviceListItem}>Item 4</li>
                            <li className={styles.serviceListItem}>Item 5</li>
                            <li className={styles.serviceListItem}>Item 6</li>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceCardHead}>
                        <div className={styles.serviceCardTitle}>Title1</div>
                        <div className={styles.serviceCardBanner}>
                            Slide #1 banner
                        </div>
                    </div>
                    <div className={styles.serviceCardBody}>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                            <li className={styles.serviceListItem}>Item 4</li>
                            <li className={styles.serviceListItem}>Item 5</li>
                            <li className={styles.serviceListItem}>Item 6</li>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceCardHead}>
                        <div className={styles.serviceCardTitle}>Title1</div>
                        <div className={styles.serviceCardBanner}>
                            Slide #1 banner
                        </div>
                    </div>
                    <div className={styles.serviceCardBody}>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                            <li className={styles.serviceListItem}>Item 4</li>
                            <li className={styles.serviceListItem}>Item 5</li>
                            <li className={styles.serviceListItem}>Item 6</li>
                            <li className={styles.serviceListItem}>Item 1</li>
                            <li className={styles.serviceListItem}>Item 2</li>
                            <li className={styles.serviceListItem}>Item 3</li>
                        </ul>
                    </div>
                </div>
            </Swiper>
        </React.Fragment>
    );
};
export default CenteredSlides;
