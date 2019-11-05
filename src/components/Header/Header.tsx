import React from 'react';
import ReactDOM from 'react-dom';
import compose from 'recompose/compose';
import clsx from 'clsx';
import { withTranslation, WithTranslation } from 'react-i18next';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Language from './Language';
import LinkTo from './LinkTo';

const styles = (theme: Theme) => createStyles({
  header: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '30px',
    },
  },
  headerBar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    boxShadow: 'none',
  },
  headerBarFixed: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);'
  },
  headerBackground: {
    height: '515px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: 'url(cover.png)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat'
  },
  flex: {
    flex: 1,
  },
  horizontalNavigation: {
    flex: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  verticalNavigation: {
    flex: 1,
    minWidth: 300,
    backgroundColor: theme.palette.primary.main,
  },
  hamburger: {
    color: 'rgba(255,255,255,0.7)',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navigationItem: {
    color: 'black'
  },
});

interface HeaderState {
  position: string;
  navigationItemClass: boolean;
  isDrawerVisible: boolean;
}

interface HeaderProps extends WithStyles<typeof styles>, WithTranslation {}

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    position: 'static',
    navigationItemClass: true,
    isDrawerVisible: false,
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll();
  }

  handleScroll() {
    const node = ReactDOM.findDOMNode(this) as Element;

    if (node) {
      let rect = node.getBoundingClientRect() as DOMRect;
      let position = 'static';
      let navigationItemClass = false;

      if (rect) {
        if ((rect.y || rect.top) < -45) {
          position = 'fixed';
          navigationItemClass = true
        }
        this.setState({ position, navigationItemClass })
      }
    }
  }

  showDrawer() {
    this.setState({ isDrawerVisible: true })
  }

  hideDrawer() {
    this.setState({ isDrawerVisible: false })
  }

  render() {
    const { t, classes } = this.props;
    const { position, navigationItemClass, isDrawerVisible } = this.state;
    const headerClass = clsx({
      [classes.headerBar]: true,
      [classes.headerBarFixed]: position === 'fixed',
    });

    return (
      <div className={classes.header}>
        <div className={classes.headerBackground} />
        <AppBar position="fixed" className={headerClass}>
          <Toolbar>
            <IconButton
              color="inherit"
              className={clsx(classes.hamburger, { [classes.navigationItem]: navigationItemClass } )}
              onClick={() => this.showDrawer()}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.flex}></div>
            <Grid className={classes.horizontalNavigation} container spacing={0} direction="row">
              <LinkTo to="profile" title={t('header.about')} enableNavigationItemClass={navigationItemClass} />
              <LinkTo to="experience" title={t('header.experience')} enableNavigationItemClass={navigationItemClass} />
              <LinkTo to="skills" title={t('header.skills')} enableNavigationItemClass={navigationItemClass} />
              <LinkTo to="education" title={t('header.education')} enableNavigationItemClass={navigationItemClass} />
              <LinkTo to="blog" title={t('header.blog')} enableNavigationItemClass={navigationItemClass} />
              <LinkTo to="contact" title={t('header.contact')} enableNavigationItemClass={navigationItemClass} />
            </Grid>
            <Language enableNavigationItemClass={navigationItemClass} />
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isDrawerVisible} onClose={() => this.hideDrawer()}>
          <Grid className={classes.verticalNavigation} container alignItems="center" justify="center" spacing={0} direction="column">
            <LinkTo to="profile" title={t('header.about')} enableNavigationItemClass={navigationItemClass} />
            <LinkTo to="experience" title={t('header.experience')} enableNavigationItemClass={navigationItemClass} />
            <LinkTo to="skills" title={t('header.skills')} enableNavigationItemClass={navigationItemClass} />
            <LinkTo to="education" title={t('header.education')} enableNavigationItemClass={navigationItemClass} />
            <LinkTo to="blog" title={t('header.blog')} enableNavigationItemClass={navigationItemClass} />
            <LinkTo to="contact" title={t('header.contact')} enableNavigationItemClass={navigationItemClass} />
          </Grid>
        </Drawer>
      </div>
    );
  }
}

export default compose<HeaderProps, {}>(
  withTranslation('translation'),
  withStyles(styles),
)(Header);