import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useSwiper} from "swiper/react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styles from "./carousel.module.css";
// import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg"; --> syntax to use svg files as react components

export default function LeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.IsBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function (){
            setIsBeginning(swiper.IsBeginning);
        })
    }, []);

    return (
        <Box className={styles.leftNavigationIcon}>
            {!isBeginning && <ChevronLeftIcon onClick={()=> swiper.slidePrev()}/>}
        </Box>
    )
}