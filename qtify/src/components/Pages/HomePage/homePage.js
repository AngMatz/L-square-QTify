import React from "react";
import Hero from "../../HeroSection/heroSection.js";
import Box from '@mui/material/Box';
import SongCard from "../../Card/Card.js";
import Section from "../../Section/section.js";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../../apiCalls/apiCalls.js";
import { fetchFAQs } from "../../../apiCalls/apiCalls.js";
import styles from "./homePage.module.css";
import FAQ from "../../FAQs/FAQ.js";
import MusicPlayerSlider from "../../MusicPlayer/musicPlayer.js";
import { Divider } from "@mui/material";

export default function HomePage() {
    const {data} = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;

return (
    <>
    <Hero />
    <Box className={styles.wrapper}>
    <Section title="Top Albums" data={topAlbums} type="album"/>
    <Divider className={styles.divider}/>
    <Section title="New Albums" data={newAlbums} type="album"/>
    <Divider className={styles.divider}/>
    <Section title="Songs" data={songs} filterByGenre={fetchFilters} type="song"/> 
    <Divider className={styles.divider}/>
    </Box>
    <Box>
        <FAQ fetchFAQs={fetchFAQs}/>
    </Box>
    <Box>
        <MusicPlayerSlider />
    </Box>
    </>
)
}