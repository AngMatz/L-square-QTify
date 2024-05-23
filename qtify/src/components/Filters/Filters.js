import React, {useState, useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import styles from "./filters.module.css";

function CustomTabPanel(props){
    const {children, value, index, ...other} = props;

    return (
        <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    )
}

function allyProps(index){
    return {
        id: `simple-tab-${index}`,
        "aria-controls" : `simple-tabpanel-${index}`,
    };
}

export default function Filters({filters, selectedFilterIndex, setSelectedFilterIndex}){
    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue);
    }

    return (
        <Box sx={{paddingTop: "10px"}}>
            <Tabs
            value={selectedFilterIndex}
            onChange={handleChange}
            aria-label="basic tabs"
            TabIndicatorProps={{
                style: {
                    backgroundColor: "var(--color-primary)",
                },
            }}
            >
                {filters.map((ele, index)=>(
                    <Tab className={styles.Tab} label={ele.label} {...allyProps(index)}/>
                ))}
            </Tabs>
        </Box>
    )
}