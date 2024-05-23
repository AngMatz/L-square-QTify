import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {useSwiper} from 'swiper/react';
import LeftNavigation from "./carouselLeftNavigation.js";
import RightNavigation from "./carouselRightNavigation.js"
import styles from "./carousel.module.css";
import "swiper/css";

const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(()=>{
        swiper.slideTo(0);
    }, [data]);

    return <></>;
}

export default function Carousel({data, renderComponent}){
return (
    <Box className={styles.wrapper}>
        <Swiper style={{padding: "0px 20px", height:"255px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
        >
        <Controls data={data} />
        <LeftNavigation />
        <RightNavigation />
        {data.map((ele) => (
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
        </Swiper>
    </Box>
)
}