import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useResume } from '../../../contexts/resume';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(3, 4),
      flexGrow: 1,
    },
    button: {
      color: 'white',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  }),
);

function ContactForm() {
  const { t } = useTranslation();
  const classes = useStyles();
  const resume = useResume();
  const email = resume.basics.email;
  const action = `https://formspree.io/${email}`;

  return (
    <Paper className={classes.root}>
      <form method="post" action={action}>
        <Grid container direction="column" spacing={0} justify="center">
          <Typography variant="h6">
            {t('contactForm.contactMe')}
          </Typography>
          <TextField id="name" label={t('contactForm.name')} margin="normal" name="name" required />
          <TextField id="email" label={t('contactForm.email')} margin="normal" name="email" type="email" required />
          <TextField id="subject" label={t('contactForm.subject')} margin="normal" name="subject" required />
          <TextField id="message" label={t('contactForm.message')} margin="normal" name="message" multiline rowsMax="4" required />
          <div>
            <Button variant="contained" color="primary" type="submit" className={classes.button}>
              {t('contactForm.send')}
            </Button>
          </div>
        </Grid>
      </form>
    </Paper>
  );
}

export default ContactForm;
