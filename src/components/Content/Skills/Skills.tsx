import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import SectionTitle from '../../common/SectionTitle';
import { useResume } from '../../../contexts/resume';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      height: '100%',
    },
    button: {
      marginTop: 15,
      marginBottom: 15,
    },
    container: {
      padding: theme.spacing(3),
    },
    skillListItem: {
      color: '#333333',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      textAlign: 'left',
      margin: 0,
      padding: 0,
    },
    skillListItemValue: {
      color: '#9da0a7',
      fontSize: 15,
      textAlign: 'left',
      marginTop: -3,
      padding: 0,
    },
    skillValueAItemValue: {
      color: 'inherit',
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    divider: {
      marginBottom: theme.spacing(2),
    },
  })
);

type Skill = {
  name: string;
  level?: string;
  keywords: [string];
}

function Skills() {
  const { t } = useTranslation();
  const classes = useStyles()
  const resume = useResume();
  const skills = resume.skills as [Skill];

  return (
    <Grid id="skills" container alignContent="stretch" direction="column" justify="center" spacing={0}>
      <SectionTitle title={t('content.skills')} />
      <Paper className={classes.container}>
        {skills.map((skill, index) => (
          <Grid key={index} container item spacing={3} direction="column">
            <Grid container item direction="row" alignContent="stretch" justify="space-evenly" spacing={3}>
              <Grid className={classes.skillListItem} item xs={12} md={3}>
                {skill.name}
              </Grid>
              <Grid className={classes.skillListItemValue} item xs={12} md={9}>
                {skill.keywords.map((keyword, index) => (
                  <Chip key={index} label={keyword} className={classes.chip} />
                ))}
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
          </Grid>        
        ))}
      </Paper>
    </Grid>
  );
}

export default Skills;
