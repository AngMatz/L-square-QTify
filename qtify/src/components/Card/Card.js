import * as React from 'react';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from '@mui/material';
// import AlbumThumbnail from "../../assets/album_thumbnail1.png";
import styles from "./card.module.css"


export default function SongCard({data, type}){
  const getCard = (type) => {
    if(type==="album") {
        const {image, follows, title, slug, songs} = data;
      return (
       <Box>
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <Link to={`/album/${slug}`} />
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170px"
              image={image}
              alt="album thumbnail"
              loading="lazy"
            />
            <CardContent>
            <Chip label={`${follows} Follows`} className={styles.chipText}/>
            </CardContent>
          </CardActionArea>
        </Card>
        <Typography className={styles.text}>
            {title}
        </Typography>
        </Tooltip>
        </Box>
      );
    }
    else if (type==="song"){
      const {image, likes, title} = data;
      return(
      <Box>
        <Card className= {styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170px"
              image={image}
              alt="album thumbnail"
              loading="lazy"
            />
            <CardContent>
            <Chip label={`${likes} Likes`} className={styles.chipText}/>
            </CardContent>
          </CardActionArea>
        </Card>
        <Typography className={styles.text}>
            {title}
        </Typography>
      </Box>
      );
    }
}
return getCard(type);
}
