import React from 'react';
import moment from 'moment';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    date: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1,
      textAlign: 'center',
      marginBottom: 0,
      color: theme.palette.primary.main,
      marginTop: 10,
    },
    header3: {
      color: '#414141',
      fontSize: 22,
      fontWeight: 400,
      lineHeight: 1.1,
      textAlign: 'center',
      marginBottom: 0,
      marginToo: 0,
    },
    header4: {
      color: '#878787',
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 1.1,
      textAlign: 'center',
      marginBottom: 30,
    },
    description: {
      wordWrap: 'break-word',
      width: '100%',
      textAlign: 'center',
    },
  }),
);

interface WorkProps {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: [string];
}

function Work(props: WorkProps) {
  const { company, position, startDate, endDate, summary } = props;
  const classes = useStyles();
  const year = `${moment(startDate).format('MMM YYYY')} - ${endDate ? moment(endDate).format('MMM YYYY') : 'present'}`;
  const title = position;
  const description = summary;

  return (
    <Grid container direction="column" spacing={0} alignContent="center">
      <div className={classes.date}>{year}</div>
      <h3 className={classes.header3}>{company}</h3>
      <h4 className={classes.header4}>{title}</h4>
      <p className={classes.description}>{description}</p>
    </Grid>
  );
}

export default Work;
