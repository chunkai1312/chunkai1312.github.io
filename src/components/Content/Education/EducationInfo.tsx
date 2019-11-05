import React from 'react';
import moment from 'moment';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Bubble from '../../common/Bubble';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    date: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1,
      textAlign: 'left',
      marginBottom: 0,
      color: theme.palette.primary.main,
      marginTop: 10
    },
    header3: {
      color: '#414141',
      fontSize: 22,
      fontWeight: 400,
      lineHeight: 1.1,
      textAlign: 'left',
      marginBottom: 0,
      marginToo: 0,
    },
    header4: {
      color: '#878787',
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 1.1,
      textAlign: 'left',
      marginBottom: 30,
    },
  }),
);

interface EducationProps {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

function EducationInfo(props: EducationProps) {
  const { institution, area, studyType, startDate, endDate } = props;
  const classes = useStyles();
  const university = institution;
  const year = `${moment(startDate).format('YYYY')} - ${moment(endDate).format('YYYY')}`;
  const name = `${studyType}, ${area}`;

  return (
    <Grid container direction="column" alignContent="stretch">
      <div><Bubble content={year} /></div>
      <h3 className={classes.header3}>{university}</h3>
      <p className={classes.header4}>{name}</p>
    </Grid>
  );
}

export default EducationInfo;
