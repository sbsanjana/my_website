import React from "react";
import Header from './components/header.js'
import Top from './components/bar'
import "fontsource-roboto-mono"
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from './components/templateCard'



export default function Home() {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  



  return (
    <div className='home' style={{padding:'3em'}}> 
  
    <Grid container spacing ={1}>
        <Grid item xs={12} sm ={6} lg={12} spacing = {1} >
          <Box  display="flex" flexDirection="row-reverse">
            <Top />    
          </Box>
        </Grid>
      
        <Grid item  xs ={12} spacing = {1}>
          <Header />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2} spacing={1}>
          <Button size='large' variant='outlined'> Connect</Button>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2} spacing={1}>
          <Button size='large' variant='outlined'> BUTTOn</Button>
        </Grid>
    
      
  </Grid>

    

      
    </div>
  )
}