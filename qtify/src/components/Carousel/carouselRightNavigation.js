import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useSwiper} from "swiper/react";
import {ReactComponent as RightArrow} from '../../assets/rightArrow.svg';
import styles from "./carousel.module.css";

export default function RightNavigation() {
    const swiper = useSwiper();
    const [isEnding, setIsEnding] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on('reachEnd', function(){
            setIsEnding(swiper.isEnd);
        });
        
        swiper.on('slideChange', function(){
            setIsEnding(swiper.isEnd);
        });
    }, [swiper]);

    

    return (
        <Box className={styles.rightNavigationIcon}>
            {!isEnding && <RightArrow onClick={() => swiper.slideNext()}/>}
        </Box>
    )
}