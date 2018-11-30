import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Planet from './components/Planet';
import Login from './components/Login'
import {


} from 'react-router-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router'


const Loginpage = () => (
  <Login />
);

const Planetpage = () => (
  <Planet />
);

const PrivateRoute = ({ component: Component, ...rest }) => {


  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('login') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}


class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <Route path='/' component={Loginpage} />
          < PrivateRoute  path='/test' component={Planetpage}  />
        </div>
      </Router>
    );
  }
}

export default App;
