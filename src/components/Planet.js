import React, { Component } from "react";
import Detail from "./Detail"
import "./Planet.css";
import { browserHistory, Redirect } from 'react-router';
import Button from '@material-ui/core/Button';


const ListItem = ({ value, onClick }) => (

  <p style={{ width: 200, height: 30, fontSize: 15, color: 'blue', background: 'lightgrey' }} onClick={onClick}>{value.name}</p>
);

const List = ({ items, onItemClick }) => (
  <ul>
    {
      items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
    }
  </ul>
);
class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [], query: '', searchItems: [], details: '', update: false, showModal: false
    };

  }
  componentWillMount() {

    if (localStorage.getItem('login') == "false") {
      browserHistory.replace('/')
      browserHistory.push('/')
    } else {
      fetch("https://swapi.co/api/planets/")
        .then(response => response.json())
        .then(data => {
          this.setState({
            items: data.results,
            searchItems: data.results
          });
        });
    }

  }


  handleLogout = () => {
    browserHistory.goBack();
    localStorage.setItem('login', false);
  };

  handleItemClick = event => {
    for (var i = 0; i < this.state.searchItems.length; i++) {
      if (this.state.searchItems[i].name == event.target.textContent) {
        this.setState({
          details
            : this.state.searchItems[i], update: true, showModal: true
        })
        break;
      }
    }
  };

  handleInputChange = () => {
    let searcjQery = this.search.value.toLowerCase(),
      displayedContacts = this.state.items.filter((el) => {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
      })
    this.setState({
      searchItems: displayedContacts
    })

  }

  render() {

    return (
      <div className="list">
        <form >
          <input className="inputForm"
            placeholder="Search for Planets..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
        <List items={this.state.searchItems} onItemClick={this.handleItemClick} />
        
        {this.state.update ? <Detail show={this.state.showModal} value={this.state.details}
         handleClose={() => this.setState({ showModal: false })} /> : null}

        <Button onClick={this.handleLogout} aria-label="Delete" variant="outlined" size="large"
          style={{ color: 'lightgrey', background: 'blue', height: 30 }}  >
          Logout
      </Button>

      </div>
    );
  }


}

export default Planet;