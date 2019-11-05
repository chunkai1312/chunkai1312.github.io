import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//@ts-ignore
import { SocialIcon } from 'react-social-icons';

import { useResume } from '../../contexts/resume';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(2, 1),
    },
  }),
);

interface SocialIconsProps {
  color: string;
}

type Profile = {
  network: string;
  username: string;
  url: string;
}

function SocialIcons(props: SocialIconsProps) {
  const { color } = props;
  const classes = useStyles();
  const resume = useResume();
  const socials = resume.basics.profiles as [Profile];

  return (
    <Grid item container alignContent="center" justify="center" spacing={0} className={classes.root}>
      <SocialIcon
        className={classes.button}
        network="email"
        fontSize="24px"
        bgColor={color}
        url={`mailto:${resume.basics.email}`}
      />
      {socials.map((social, index) => (
        <SocialIcon
          key={index}
          className={classes.button}
          url={social.url}
          fontSize="24px"
          bgColor={color}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </Grid>
  );
}

SocialIcons.defaultProps = {
  color: 'white',
};

export default SocialIcons;
