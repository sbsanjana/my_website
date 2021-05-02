import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { render } from "react-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import {
    FiCard,
    FiCardActionArea,
    FiCardActions,
    FiCardContent,
    FiCardMedia
  } from "./FullImageCard";

  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
      },
    /**
     * Max Card with for demo
     * same values used in Material-Ui Card Demos
     */
    card: {
      maxWidth: 345
    },
  
    /**
     * Applied to Orginal Card demo
     * Same vale used in Material-ui Card Demos
     */
    media: {
      height: 140
    },
  
    /**
     * Demo stlying to inclrease text visibility
     * May verry on implementation
     */
    fiCardContent: {
      color: "#ffffff",
      backgroundColor: "rgba(0,0,0,.24)"
    },
    fiCardContentTextSecondary: {
      color: "rgba(255,255,255,0.78)"
    }
  });
export default function templateCard(props) {
    const classes = useStyles();
    const [state, setState] = useState({
      raised:false,
      shadow:1,
    })
  return (
    <Box my={4}>
    <FiCard className={classes.card}
    classes={{root: state.raised ? classes.cardHovered : ""}}
    onMouseOver={()=>setState({ raised: true, shadow:3})} 
    onMouseOut={()=>setState({ raised:false, shadow:1 })} 
    raised={state.raised} zdepth={state.shadow}>
          <FiCardMedia
          
            media="picture"
            alt="Contemplative Reptile"
            image={props.imLink}
            title="Contemplative Reptile"
          />
          <FiCardContent className={classes.fiCardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.fiCardContentTextSecondary}
              component="p"
            >
              {props.text}
            </Typography>
          </FiCardContent>
          <FiCardActions className={classes.fiCardContent}>
            <Button size="small" color="inherit" variant="outlined" href={props.link}>
              View
            </Button>
            {/* <Button size="small" color="inherit" variant="outlined">
              Learn More
            </Button> */}
          </FiCardActions>
        </FiCard>
      </Box>

  )
 
}