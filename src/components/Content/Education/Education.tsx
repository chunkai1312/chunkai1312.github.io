import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EducationInfo from './EducationInfo';
import EventContainer from '../../common/EventContainer';
import SectionTitle from '../../common/SectionTitle';
import TimelineBar from '../../common/TimelineBar';
import { useResume } from '../../../contexts/resume';
import { LEFT, RIGHT } from '../../../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'stretch',
      justifyItems: 'center',
      [theme.breakpoints.down('md')]: {
        alignItems: 'stretch',
        justifyItems: 'space-evenly',
      },
    },
    relative: {
      position: 'relative',
    },
    clear: {
      position: 'relative',
      '*zoom': 1,
  
      "&:before": {
        content: '""',
        display: 'table',
      },
  
      "&:after": {
        content: '""',
        display: 'table',
        clear: 'both'
      }
    },
    barClass: {
      height: 100,
      top: 80,
      [theme.breakpoints.down('md')]: {
        height: 300,
        top: 20,
        zIndex: -1
      },
    },
  })
);

type Education = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

function Educations() {
  const { t } = useTranslation();
  const classes = useStyles()
  const resume = useResume();
  const educations = resume.education as [Education];

  return (
    <Grid container item xs={12} spacing={0} className={classes.root} direction="column" justify="center">
      <SectionTitle title={t('content.education')} />
      <div style={{ position: 'relative' }}>
        <div className={classes.clear}>
          <TimelineBar barClass={classes.barClass} />
          {educations.map((education, index) => (
            <EventContainer key={index} alignment={index % 2 === 0 ? LEFT : RIGHT}>
              <EducationInfo
                institution={education.institution}
                area={education.area}
                studyType={education.studyType}
                startDate={education.startDate}
                endDate={education.endDate}
              />
            </EventContainer>
          ))}
        </div>
      </div>
    </Grid>
  );
}

export default Educations;