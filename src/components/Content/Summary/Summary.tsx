import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useResume } from '../../../contexts/resume';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    summary: {
      color: '#878787',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.8,
      textAlign: 'center',
      marginBottom: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(2),
      padding: theme.spacing(2, 4),
      color: '#525252',
    },
  }),
);

function Summary() {
  const { t } = useTranslation();
  const classes = useStyles();
  const resume = useResume();
  const summary = resume.basics.summary;

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        className={classes.button}
        component="a"
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        {t('content.downloadResume')}
      </Button>
      <p className={classes.summary}>{summary}</p>
    </div>
  );
}

export default Summary;
