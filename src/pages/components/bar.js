import React from "react";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { render } from "react-dom";


export default function Bar() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{fontSize:20}}>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        About Me
      </Link>
      <Link color="inherit" href="/" onClick={handleClick}>
        Experience
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Projects
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Resume
      </Link>    </Breadcrumbs>

  )
 
}