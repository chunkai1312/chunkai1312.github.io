import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Element } from 'react-scroll';
import Profile from './Profile';
import Info from './Summary';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Blog from './Blog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    about: {
      marginTop: 50,
      [theme.breakpoints.up('sm')]: {
        marginTop: 70,
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
      },
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function About() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.about}>
      <Grid item xs={12}>
        <Element name="profile">
          <Profile />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="info">
          <Info />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="experience">
          <Experience />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="skills">
          <Skills />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="education">
          <Education />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="blog">
          <Blog />
        </Element>
      </Grid>
    </Grid>
  );
}

export default About;
