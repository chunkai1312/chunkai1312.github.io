import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Element } from 'react-scroll';
import About from './About';
import Contact from './Contact';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginLeft: '20px',
      marginRight: '20px',
    },
    content: {
      zIndex: 2,
      position: 'relative',
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
    padding0: {
      padding: '0 !important',
    },
  }),
);

function Content() {
  const classes = useStyles();

  return (
    <Grid container justify={'center'} className={classes.content}>
      <Grid xs={12} sm={12} md={8} item container direction={"column"} className={classes.padding0} lg={8}>
        <About />
        <Element name="contact">
          <Contact />
        </Element>
      </Grid>
    </Grid>
  );
}

export default Content;
