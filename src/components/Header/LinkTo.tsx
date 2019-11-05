import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    scrollChor: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '14',
      fontWeight: 700,
      fontFamily: '"Open Sans", sans-serif',
      lineHeight: 1,
      textDecoration: 'none',
      marginRight: 30,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginBottom: 30,
        color: 'white',
      },
    },
    navigationItem: {
      color: 'black',
      [theme.breakpoints.down('md')]: {
        color: 'white',
      },
    },
    spanClass: {
      height: 3,
      marginTop: 10,
      width: '100%',
      backgroundColor: 'transparent',
    },
    activeSpanClass: {
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        backgroundColor: 'transparent',
      },
    },
    activeTitle: {
      [theme.breakpoints.down('md')]: {
        fontStyle: 'italic',
        fontSize: '16',
        fontWeight: 'bold',
      },
    },
  }),
);

interface LinkToProps {
  to: string,
  title: string,
  enableNavigationItemClass: boolean,
  offset: number,
}

function LinkTo(props: LinkToProps) {
  const { to, title, enableNavigationItemClass, offset } = props;
  const classes = useStyles();
  const [isLinkActive, setLinkActive] = React.useState(false)
  const _handleSetActive = () => setLinkActive(true)
  const _handleSetInactive = () => setLinkActive(false)

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={offset}
      onSetActive={_handleSetActive}
      onSetInactive={_handleSetInactive}
      className={clsx({
        [classes.scrollChor]: true,
        [classes.navigationItem]: enableNavigationItemClass,
      })}
    >
      <span
        className={clsx({
          [classes.activeTitle]: isLinkActive,
        })}
      >{title}</span>
      <span className={clsx({
        [classes.spanClass]: true,
        [classes.activeSpanClass]: isLinkActive,
      })}></span>
    </Link>
  );
}

LinkTo.defaultProps = {
  enableNavigationItemClass: false,
  offset: -120,
};

export default LinkTo;