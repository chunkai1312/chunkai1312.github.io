import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.1,
      display: 'inline-block',
      padding: '7px 12px',
      textTransform: 'uppercase',
      position: 'relative',
      backgroundColor: theme.palette.primary.main,
      borderLeftColor: theme.palette.primary.main,

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
  }),
);

export interface BubbleProps {
  content: string;
}

function Bubble(props: BubbleProps) {
  const classes = useStyles();

  return (
    <span className={classes.container}>
      {props.content}
    </span>
  );
}

export default Bubble;
