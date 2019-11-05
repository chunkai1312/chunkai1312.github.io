import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Work from './Work';
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
    barClass: {
      height: 865,
      top: 80,
      [theme.breakpoints.down('md')]: {
        height: 1300,
        top: 20,
        zIndex: -1,
      },
    },
    relative: {
      position: 'relative',
    },
    clear: {
      position: 'relative',
      '*zoom': 1,
  
      '&:before': {
        content: '""',
        display: 'table',
      },
  
      '&:after': {
        content: '""',
        display: 'table',
        clear: 'both',
      },
    },
  }),
);

type Work = {
  company: string;
  position: string;
  website?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: [string];
}

function Experience() {
  const { t } = useTranslation();
  const classes = useStyles()
  const resume = useResume();
  const works = resume.work as [Work];

  return (
    <Grid container item xs={12} spacing={0} className={classes.root} direction="column" justify="center">
      <SectionTitle title={t('content.experience')} />
      <div style={{ position: 'relative' }}>
        <div className={classes.clear}>
          <TimelineBar barClass={classes.barClass} />
          {works.map((work, index) => (
            <EventContainer key={index} alignment={index % 2 === 0 ? LEFT : RIGHT}>
              <Work
                company={work.company}
                position={work.position}
                startDate={work.startDate}
                endDate={work.endDate}
                summary={work.summary}
                highlights={work.highlights}
              />
            </EventContainer>
          ))}
        </div>
      </div>
    </Grid>
  );
}

export default Experience;