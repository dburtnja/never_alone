import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';

function App(props) {
  return (
        <Map
          google={props.google}
          zoom={8}
          className={'map-container'}
          initialCenter={{ lat: 49.843880, lng: 24.024524}}
        />
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD-pIXF-3kG9zM9OEuE9UiEVAeTE2uTLIo'
})(App);
