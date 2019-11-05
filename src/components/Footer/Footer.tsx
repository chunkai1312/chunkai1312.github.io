import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SocialIcons from '../common/SocialIcons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 50,
    },
  }),
);

function Footer() {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <SocialIcons color="grey" />
    </Grid>
  );
}

export default Footer;