import React from "react";
import Box from "@mui/material/Box";
import heroImage from "../../assets/hero_image.png";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styles from "./heroSection.module.css";

export default function Hero(){
    return (
    <Box sx={{height: "270px", width: "1440px"}}> 
        <Box className={styles.hero}> 
            <Box>
                <Stack>
                    <Typography className={styles.text}>
                        100 Thousand Songs, ad-free
                    </Typography>
                    <Typography className={styles.text}>
                         Over thousands podcast episodes
                     </Typography>
                </Stack>
            </Box> 
            <Box sx={{margin: "5px"}}>
                <img src={heroImage} alt="hero image" height={212} width={212} />
            </Box>
        </Box> 
    </Box>
    );
}