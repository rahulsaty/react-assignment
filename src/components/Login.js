import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { browserHistory} from 'react-router';

import "./Login.css";
import Planet from "./Planet";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      loading: false,
      login: false
    };

  }
  componentWillMount() {
 
    if(localStorage.getItem('login')=="true" )
    {
      browserHistory.push('/planets')
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.length == 0) {
      alert("Please enter the Name")
    } else if (this.state.password.length == 0) {
      alert("Please enter the Password")
    } else {
      this.setState({
        loading: true
      });

      fetch("https://swapi.co/api/people/?search="+this.state.name)
        .then(response => response.json())
        .then(data => {
          console.log(data.results);
          for (var i = 0; i < data.results.length; i++) {
            if (data.results[i].name == this.state.name && data.results[i].birth_year == this.state.password) {

              this.setState({
                loading: false,

              });
              alert("Successfully Login!!!");
              localStorage.setItem('login', true);
              localStorage.setItem('user', this.state.name);
              localStorage.setItem('gender', data.results[i].gender);
              browserHistory.push('/planets')
              console.log(browserHistory)
              break;
            }
            this.setState({
              loading: false,

            });

          }
        })

    }

  }

  render() {
  
    return (

      <div align="center" className="parent" >

        {!this.state.login ? <form onSubmit={this.handleSubmit} >

          <div className="card">
            <div className="header">
              <b >STAR WARS</b></div>
            <div>
              <TextField className="textField"
                id="standard-name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </div>
            <div>
              <TextField className="textField"
                id="standard-name"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
              />
            </div>
            <div align="right" className="button">

              <Button aria-label="Delete" type="submit" variant="outlined" size="large"   >
                {this.state.loading ? <CircularProgress size={24} id="progress"
                  class="progress" /> : null}
                Login
      </Button>
            </div></div>
        </form> : <Planet />}
      </div>
    );
  }


}


export default Login;