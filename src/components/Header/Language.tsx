import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LANGUAGES_LABEL } from '../../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    language: {
      color: 'rgba(255,255,255,0.7)',
      margin: theme.spacing(0, 0.5, 0, 1),
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    icon: {
      color: 'rgba(255,255,255,0.7)',
    },
    navigationItem: {
      color: 'black'
    },
  }),
);


interface LanguageProps {
  enableNavigationItemClass: boolean,
}

function Language(props: LanguageProps) {
  const { enableNavigationItemClass } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles()
  const { i18n } = useTranslation();
  const selectedLanguage = LANGUAGES_LABEL.find(language => language.code === i18n.language);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Button aria-haspopup="true" color="inherit" onClick={handleClick}>
        <LanguageIcon className={clsx(classes.icon, { [classes.navigationItem]: enableNavigationItemClass } )} />
        <span className={clsx(classes.language, { [classes.navigationItem]: enableNavigationItemClass } )}>
          {selectedLanguage ? selectedLanguage.text : 'Language'}
        </span>
        <ExpandMoreIcon fontSize="small" className={clsx(classes.icon, { [classes.navigationItem]: enableNavigationItemClass } )} />
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {LANGUAGES_LABEL.map(language => (
          <MenuItem
            key={language.code}
            selected={language.code === i18n.language}
            onClick={() => i18n.changeLanguage(language.code)}
          >
            <ListItemText primary={language.text} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Language;