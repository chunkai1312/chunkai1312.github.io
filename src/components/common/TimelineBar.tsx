import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      content: '""',
      width: 4,
      opacity: 0.2,
      marginLeft: -2,
      position: 'absolute',
      left: '50%',
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

interface TimelineBarProps {
  barClass: string;
}

function TimelineBar(props: TimelineBarProps) {
  const { barClass } = props;
  const classes = useStyles();

  return (
    <div className={clsx({ [classes.bar]: true, [barClass]: true })} />
  );
}

export default TimelineBar;