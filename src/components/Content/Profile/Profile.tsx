import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import SocialIcons from '../../common/SocialIcons';
import Bubble from '../../common/Bubble';
import ContactInfo from '../../common/ContactInfo';
import { useResume } from '../../../contexts/resume';

//@ts-ignore
import gravatar from 'gravatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.up('sm')]: {
        marginTop: 20,
      },
      [theme.breakpoints.down('md')]: {
        marginTop: 150,
      },
    },
    profile: {
      padding: '57px 50px 15px 50px',
      [theme.breakpoints.down('lg')]: {
        padding: '50px 40px 15px 40px',
      },
      [theme.breakpoints.down('md')]: {
        padding: '30px 20px 15px 20px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '30px 20px 15px 20px',
      },
      marginBottom: 10,
    },
    profilePhoto: {
      maxWidth: '100%',
    },
    profileInfo: {
      color: '#3d4451',
      paddingBottom: 25,
      marginBottom: 25,
      borderBottom: '1px solid #dedede',
      [theme.breakpoints.down('md')]: {
        borderBottom: '0px',
      },
    },
    greeting: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.1,
      display: 'inline-block',
      padding: '7px 12px',
      textTransform: 'uppercase',
      position: 'relative',
      backgroundColor: theme.palette.primary.main,
  
      '&:before': {
        content: '""',
        width: 0,
        height: 0,
        top: '100%',
        left: 5,
        display: 'block',
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: '0 0 8px 8px',
        borderColor: 'transparent',
        borderLeftColor: theme.palette.primary.main,
      },
    },
    profileTitle: {
      fontSize: 32,
      lineHeight: 1.1,
      fontWeight: 700,
      marginBottom: 5,
      [theme.breakpoints.down('md')]: {
        fontSize: 20,
      },
    },
    profileTitleStart: {
      fontWeight: 200,
    },
    profilePosition: {
      fontSize: 18,
      [theme.breakpoints.down('md')]: {
        fontSize: 16,
      },
      fontWeight: 400,
      lineHeight: 1.1,
      marginBottom: 0,
    },
    profileSocial: {
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

function Profile() {
  const classes = useStyles();
  const resume = useResume();
  const name = resume.basics.name;
  const position = resume.basics.label;
  const email = resume.basics.email;
  const profilePhoto = gravatar.url(email, { s: 460 });

  return (
    <Paper className={classes.container}>
      <Grid item container direction="column" spacing={0}>
        <Grid item className={classes.profile} container spacing={0}>
          <Grid item lg={5} xs={12}>
            <img src={profilePhoto} alt={name} className={classes.profilePhoto} />
          </Grid>
          <Grid item xs={1} />
          <Grid item lg={6} xs={12} container spacing={0} alignContent="flex-start" direction="column">
            <Grid item className={classes.profileInfo}>
              <div>
                <Bubble content="Hello" />
              </div>
              <h1 className={classes.profileTitle}>
                <span className={classes.profileTitleStart}>I'm</span> {name}
              </h1>
              <h2 className={classes.profilePosition}>{position}</h2>
            </Grid>
            <ContactInfo />
          </Grid>
        </Grid>
        <Grid className={classes.profileSocial}>
          <SocialIcons />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Profile;
