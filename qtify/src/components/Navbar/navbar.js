import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from "../Logo/logo.jsx";
import SearchBox from '../SearchBox/searchbox.js';
import Button from "../Button/button.js";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <Box >
      <AppBar position="static" sx={{backgroundColor: "#34C94B"}}>
        <Toolbar className={styles.navbar}>
          <Logo />
          <SearchBox />
          <Button> Give Feedback </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
