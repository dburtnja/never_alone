import React from 'react';
import styles from './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Fab from "@material-ui/core/Fab";
import UserAvatar from "./UserAvatar";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";
import AddIcon from '@material-ui/icons/Add';

function App(props) {
  return (
      <div id={'app-root'}>
      {/*  <Map*/}
      {/*    google={props.google}*/}
      {/*    zoom={8}*/}
      {/*    className={'map-container'}*/}
      {/*    initialCenter={{ lat: 49.843880, lng: 24.024524}}*/}
      {/*/>*/}
      <Grid container direction={'row'}>
          <Grid container justify={'flex-start'}>
            <SearchBar />
          </Grid>
          <Grid container justify={'flex-end'}>
            <UserAvatar />
          </Grid>
      </Grid>
          <Fab color="secondary" aria-label="add" id={'add-btn'}>
              <AddIcon />
          </Fab>
      </div>
  );
}

export default App;

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyD-pIXF-3kG9zM9OEuE9UiEVAeTE2uTLIo'
// })(App);
