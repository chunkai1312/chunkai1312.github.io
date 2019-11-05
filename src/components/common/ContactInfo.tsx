import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import EmailIcon from '@material-ui/icons/Email';
// import PhoneIcon from '@material-ui/icons/Phone';

import { useResume } from '../../contexts/resume';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 15,
      paddingBottom: 15,
      flexGrow: 1,
    },
    profileListItem: {
      color: '#333333',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      textAlign: 'left',
      margin: 0,
      padding: 0,
    },
    profileListItemValue: {
      color: '#9da0a7',
      fontSize: 15,
      textAlign: 'left',
      marginTop: -3,
      padding: 0,
    },
    profileValueAItemValue: {
      color: 'inherit',
    },
  }),
);


function ContactInfo() {
  const classes = useStyles();
  const resume = useResume()
  const email = resume.basics.email;
  const phone = resume.basics.phone;
  const city = resume.basics.location.city;
  const region = resume.basics.location.region;

  return (
    <Grid container item spacing={3} direction="column">
      <Grid container item direction="row" alignContent="stretch" justify="space-evenly" spacing={3}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Address:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          {city}, {region}
        </Grid>
      </Grid>
      <Grid container item direction="row" alignContent="center" justify="center" spacing={3}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Email:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          <a className={classes.profileValueAItemValue} href={`mailto:${email}`}>{email}</a>
        </Grid>
      </Grid>
      <Grid container item alignContent="center" justify="center" direction="row" spacing={3}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Phone:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          <a className={classes.profileValueAItemValue} href={`tel:${phone}`}>{phone}</a>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;
