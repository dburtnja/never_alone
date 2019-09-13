import React from 'react';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Fab from "@material-ui/core/Fab";
import UserAvatar from "./UserAvatar";
import Grid from "@material-ui/core/Grid";
import Search from "./Search";
import AddIcon from '@material-ui/icons/Add';
import {Redirect} from 'react-router-dom';
import CreateEvent from "./CreateEvent";


function App(props) {
  return (
      <div id={'app-root'}>
        <Map
          google={props.google}
          zoom={8}
          className={'map-container'}
          initialCenter={{ lat: 49.843880, lng: 24.024524}}
      />
      <Grid container direction={'row'} justify={'space-between'}>
          <Grid item alignSelf={'flex-start'}>
            <Search searchIconEnabled={true} />
          </Grid>
          <Grid item alignSelf={'flex-end'}>
            <UserAvatar />
          </Grid>
      </Grid>
          <Fab
              color="secondary"
              aria-label="add"
              id={'add-btn'}
              onClick={ () => {
                  console.log('click');
                  props.history.push('/create-event');
                }
              }
          >
              <AddIcon onClick={ () => (
                  <CreateEvent  />
              )}/>
          </Fab>
      </div>
  );
}

// export default App;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD-pIXF-3kG9zM9OEuE9UiEVAeTE2uTLIo'
})(App);
               // {/*<Redirect to={'/create-event'} />*/}