import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//@ts-ignore
import Img from 'react-image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blogItemImage: {
      transition: 'opacity 1s, transform 1s',
      width: '100%',
      height: 233,
      opacity: 0.8,
      display: 'block',
      position: 'relative',
      backfaceVisibility: 'hidden',
    },
    blogItemBox: {
      width: '100%',
      position: 'relative',
      backgroundColor: '#fff',
      transition: 'box-shadow 0.15s linear 0s',
      backfaceVisibility: 'hidden',
      margin: theme.spacing(1),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xl')]: {
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        margin: 0,
      },
      [theme.breakpoints.down('xs')]: {
        margin: 0,
      },
      '&:hover': {
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
        cursor: 'pointer',
      },
    },
    imageContainer: {
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#2c3340',
      '&:hover img': {
        opacity: 1,
        transform: 'scale3d(1.1, 1.1, 1)',
      }
    },
    blogItemContent: {
      padding: '25px 25px 35px 25px',
    },
    blogItemTimeContainer: {
      color: '#fff',
      lineHeight: 1,
      fontWeight: 700,
      textAlign: 'center',
      position: 'absolute',
      top: 20,
      right: 20,
      padding: 10,
      display: 'block',
      backgroundColor: theme.palette.primary.main,
    },
    blogItemTimeDay: {
      fontSize: 20,
      marginBottom: 2,
    },
    blogItemTimeMonth: {
      fontSize: 13,
    },
    blogItemTitle: {
      color: '#373b42',
      fontSize: 14,
      lineHeight: 1.3,
      fontWeight: 600,
      textTransform: 'uppercase',
      textAlign: 'center',
      wordWrap: 'normal',
    },
  }),
);

interface ArticleProps {
  image: string;
  title: string;
  day: string;
  month: string;
  url: string;
}

function Article(props: ArticleProps) {
  const classes = useStyles();
  const { title, image, day, month, url } = props;

  return (
    <Grid justify="center" direction="column" item container spacing={0} md={6}>
      <Button component="a" href={url} target="_blank" rel="noopener noreferrer">
        <Paper className={classes.blogItemBox}>
          <div className={classes.imageContainer}>
            <Img src={[image, 'cover.png']} className={classes.blogItemImage} alt={title} />
          </div>
          <div className={classes.blogItemContent}>
            <time className={classes.blogItemTimeContainer}>
              <div className={classes.blogItemTimeDay}>{day}</div>
              <div className={classes.blogItemTimeMonth}>{month}</div>
            </time>
            <h3 className={classes.blogItemTitle}>{title}</h3>
          </div>
        </Paper>
      </Button>
    </Grid>
  );
}

export default Article;
