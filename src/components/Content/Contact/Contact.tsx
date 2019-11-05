import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContactForm from './ContactForm';
import MapContainer from './MapContainer';
import SectionTitle from '../../common/SectionTitle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
    },
    itemContainer: {
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: 0,
      },
    },
  }),
);

function Contact() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid alignItems="center" direction="column" container className={classes.root} spacing={0}>
      <SectionTitle title={t('content.contact')} />
      <Grid container direction="row" alignItems="stretch" justify="space-between" spacing={0}>
        <Grid item lg={6} xs={12} className={classes.itemContainer}>
          <ContactForm />
        </Grid>
        <Grid item lg={6} xs={12} className={classes.itemContainer}>
          <MapContainer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
