import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import styles from "./carousel.module.css";

export default function LeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on('slideChange', function () {
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);

    return (
        <Box className={styles.leftNavigationIcon}>
            {!isBeginning && (<LeftArrow onClick={() => swiper.slidePrev()}/>)}
        </Box>
    )
}