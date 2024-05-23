import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useSwiper} from "swiper/react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from "./carousel.module.css";

export default function RightNavigation() {
    const swiper = useSwiper();
    const [isEnding, setIsEnding] = useState(swiper.IsEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnding(swiper.IsEnd);
        })
    }, []);

    return (
        <Box className={styles.rightNavigationIcon}>
            {!isEnding && <ChevronRightIcon onClick={()=> swiper.slideNext()}/>}
        </Box>
    )
}