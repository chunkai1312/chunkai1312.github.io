import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionTitle: {
      color: '#3d4451',
      fontSize: 34,
      lineHeight: 1.2,
      fontWeight: 600,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 30,
    },
  }),
);

interface SectionTitleProps {
  title: string;
}

function SectionTitle(props: SectionTitleProps) {
  const { title } = props;
  const classes = useStyles();

  return (
    <span className={classes.sectionTitle}>{title}</span>
  );
}

export default SectionTitle;