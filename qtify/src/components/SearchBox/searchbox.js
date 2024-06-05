import SearchIcon from "../../assets/SearchIcon.png";
import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import styles from "./searchbox.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox(){
    
    return (
        <Box className={styles.searchbox}>
            {/* <TextField id="outlined-search" size="small" label="Search a song of your choice…" type="search" /> */}
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a song of your choice"
        inputProps={{ 'aria-label': 'search songs' }}
        required
        />
        <Divider className={styles.divider}  orientation="vertical" />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <img src={SearchIcon} alt="search icon"/>
        </IconButton> 
        </Box>
    )
    
}