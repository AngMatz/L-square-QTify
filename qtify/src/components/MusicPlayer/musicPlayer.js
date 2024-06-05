import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import styles from "./musicPlayer.module.css";
import { Divider } from '@mui/material';
import { ReactComponent as PlayButton } from "../../assets/playButton.svg";
import { ReactComponent as PauseButton } from "../../assets/pauseButton.svg";


const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const theme = useTheme();
  const duration = 256; // seconds
  const [position, setPosition] = React.useState(38);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = "var(--color-white)";
  
  return (
    <div style={{marginTop: "75px"}}>
       <Divider sx={{backgroundColor: "var(--color-white)", height: "2px", width: "1440px"}}/>
    <Box className={styles.wrapper}> 
    <Box className={styles.thumbnail}>
        <Box sx={{marginRight: "10px"}}>
        <img className={styles.thumbnailImage} src="https://images.pexels.com/photos/302831/pexels-photo-302831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" alt="song name"/>
        </Box>
        <div className={styles.songDetails}>
        <h4 className={styles.songName}>The Wanderer</h4>
        <h4 className={styles.albumName}>Well-off Worry</h4>
        </div>
    </Box>
    <Box sx={{marginLeft: "150px"}}>
    <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayButton
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseButton sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
    </Box>

        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{
            color: "var(--color-primary)",
            height: "6px",
            width: "676px",
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&::before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              color: "var(--color-white)",
              opacity: 1,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
    </Box>
    </Box>
    </div>
  );
}