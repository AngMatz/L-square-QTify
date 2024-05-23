import React from "react";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";
import styles from "./section.module.css";
import { useState, useEffect } from "react";
import SongCard from "../Card/Card.js";
import Carousel from "../Carousel/carousel.js";
import Filters from "../Filters/Filters.js";

export default function Section({title, data, filterByGenre, type}){
    const [filters, setFilters] = useState([{key: "all", label: "All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carousel, setCarousel] = useState(true);

    const handleClick = () => {
        setCarousel((prevState)=>!prevState);
    }

    useEffect(()=>{
        if(filterByGenre){
            filterByGenre().then((res) => {
                const {data} = res;
                setFilters([...filters, ...data]);
            });
        }
    }, []);

    const showFilters = filters.length>1;

    const cardsToRender = data.filter((card) => 
        (showFilters && selectedFilterIndex!==0) 
        ? card.genre.key === filters[selectedFilterIndex].key 
        : card);

    return (
        <Box sx={{paddingBottom: "25px"}}>
            <Box className={styles.header}>
                <Typography variant="h3" className={styles.titleText}>
                    {title}
                </Typography>
                <Typography variant="h4" className={styles.showCollapseText} onClick={handleClick}>
                    {carousel ? "Show All" : "Collapse All"}
                </Typography>
            </Box>
            <Box>
                {showFilters && (
                <Box className={styles.filterWrapper}>
                    <Filters 
                    filters={filters} 
                    selectedFilterIndex={selectedFilterIndex}
                    setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                </Box>
                )}
            </Box>

        {data.length===0 
        ? (<CircularProgress />) 
        : (
            <>
            <Box className={styles.cardsWrapper}> 
                {!carousel ? (
                <Box className={styles.wrapper}> 
                    {cardsToRender.map((ele) => (
                        <SongCard data={ele} type={type} />
                    ))}
                </Box>
            ) : (
                <Carousel data={cardsToRender}
                 renderComponent={(data)=><SongCard data={data} type={type} />}
                 /> 
                )}
            </Box>
            </>
        )
        } 
        </Box>
    )
}
    
