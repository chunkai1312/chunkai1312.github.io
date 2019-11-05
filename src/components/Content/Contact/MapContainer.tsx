import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GoogleMapReact, { Coords } from 'google-map-react';
import ContactInfo from '../../common/ContactInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      flexGrow: 1,
      height: '100%',
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(2),
      },
    },
    container: {
      height: '100%',
    },
    contactContainer: {
      padding: theme.spacing(3, 4),
    },
    mapContainer: {
      margin: 0,
      padding: 0,
      flex: 1,
      width: '100%',
      height: '100%',
      minHeight: 300,
    },
  }),
);

interface MapContainerProps {
  center: Coords;
  zoom: number;
}

function MapContainer(props: MapContainerProps) {
  const { center, zoom } = props;
  const classes = useStyles();
  const key = process.env.REACT_APP_GOOGLE_API_KEY as string;

  return (
    <Paper className={classes.root}>
      <Grid container direction="column" spacing={0} alignItems="stretch" className={classes.container}>
        <Grid className={classes.contactContainer} item>
          <ContactInfo />
        </Grid>
        <Grid className={classes.mapContainer} item xs={12}>
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
          </GoogleMapReact>
        </Grid>
      </Grid>
    </Paper>
  );
}

MapContainer.defaultProps = {
  center: { lat: 25.0293387, lng: 121.5030736 },
  zoom: 11
};

export default MapContainer;
