import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';

function Paths() {

    const isLoggedIn = () => {
        if (!localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'));
            return <Login />
        } else {
            console.log(localStorage.getItem('userData'));
            return <App />
        }
    };

    return (
      <Router>
          <Route exact path={'/'} render={isLoggedIn} />
          <Route path={'/login'} component={Login}/>
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
