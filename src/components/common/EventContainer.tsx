
import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ScrollAnimation from 'react-animate-on-scroll';
import { LEFT, RIGHT } from '../../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smallScreenBox: {
      display: 'none',
      borderColor: theme.palette.primary.main,
      padding: 20,
      borderTopWidth: 5,
      borderTopStyle: 'solid',
      marginBottom: 35,
      zIndex: 10,
      [theme.breakpoints.down('md')]: {
        display: 'block'
      },
    },
    paper: {
      borderColor: theme.palette.primary.main,
      padding: 20,
      borderTopWidth: 5,
      borderTopStyle: 'solid'
    },
    paperLeft: {
      marginRight: 35
    },
    paperRight: {
      marginLeft: 35
    },
    date: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1,
      textAlign: 'center',
      marginBottom: 0,
      color: theme.palette.primary.main,
      marginTop: 10
    },
    bigScreenBox: {
      width: '50%',
      maxWidth: '50%',
      minWidth: '50%',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
      color: '#757575',
      fontSize: 16,
      lineHeight: 1.5,
      marginBottom: 25,
      position: 'relative',
      zIndex: 10
    },
    boxLeft: {
      float: 'left',
      clear: 'left'
    },
    boxRight: {
      float: 'right',
      clear: 'right',
      top: 30,
    },
    dot: {
      top: 80,
      width: 8,
      height: 8,
      display: 'block',
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },

    },
    arrow: {
      top: 60,
      display: 'block',
      content: "''",
      position: 'absolute',
      width: 0,
      height: 0,
      boxSizing: 'border-box',
      border: '1em solid black',
      borderColor: 'transparent transparent white white',
      transformOrigin: '0 0',
      boxShadow: '-1px 1px 1px 0 rgba(0, 0, 0, 0.2)'
    },
    arrowRight: {
      right: 4,
      top: 105,
      transform: 'rotate(-135deg)',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    },
    arrowLeft: {
      left: 35,
      top: 60,
      transform: 'rotate(45deg)',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    },
    dotRight: {
      right: 0,
      marginRight: -4,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    },
    dotLeft: {
      left: 0,
      marginLeft: -4,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    }
  }),
);

interface EventContainerProps {
  alignment: string
  children: React.ReactNode
}


function EventContainer(props: EventContainerProps) {
  const { alignment } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={clsx({
        [classes.bigScreenBox]: true,
        [classes.boxLeft]: alignment === LEFT,
        [classes.boxRight]: alignment === RIGHT
      })}>
        <ScrollAnimation
          animateIn={alignment === LEFT ? 'fadeInLeft' : 'fadeInRight'}
          animateOut={alignment === LEFT ? 'fadeInLeft' : 'fadeInRight'}
          animateOnce
          initiallyVisible
          duration={1}
          offset={-100}
        >
          <Paper className={clsx(
            {
              [classes.paper]: true,
              [classes.paperLeft]: alignment === LEFT,
              [classes.paperRight]: alignment === RIGHT
            }
          )}>
            <span className={clsx({
              [classes.arrow]: true,
              [classes.arrowRight]: alignment === LEFT,
              [classes.arrowLeft]: alignment === RIGHT
            })} />
            {props.children}
          </Paper>
        </ScrollAnimation>
        <span className={clsx({
          [classes.dot]: true,
          [classes.dotRight]: alignment === LEFT,
          [classes.dotLeft]: alignment === RIGHT,
        })} />
      </div>
      <Paper className={classes.smallScreenBox}>
        {props.children}
      </Paper>
    </div>
  );
}

export default EventContainer;