import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import CreateEvent from "./CreateEvent";

function Paths() {

    const isLoggedIn = () => {
        if (!localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'));
            return <Redirect to={'/login'}/>
        } else {
            console.log(localStorage.getItem('userData'));
            return <Redirect to={'/app'}/>
        }
    };

    return (
      <Router>
          <Route exact path={'/'} render={isLoggedIn} />
          <Route path={'/app'} component={App} />
          <Route path={'/login'} component={Login}/>
          <Route path={'/create-event'} component={CreateEvent} />
      </Router>
    );
}

ReactDOM.render(
    <Paths />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
