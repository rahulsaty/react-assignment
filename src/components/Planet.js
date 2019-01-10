import React, { Component } from "react";
import Detail from "./Detail"
import { getFontSize, getColor } from "./Utils"
import { DebounceInput } from 'react-debounce-input';
import "./Planet.css";
import { browserHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
var CurrencyFormat = require('react-currency-format');


class Planet extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      items: [],
      query: '',
      searchItems: [],
      details: '',
      update: false,
      showModal: false,
      next: '',
      loading: false,
      loadMore: false,
      firstLoad: true
      
    };

  }

  componentWillMount() {

    if (localStorage.getItem('login') == "false") {
      browserHistory.replace('/')
      browserHistory.push('/')
    } else {
      this.loading=true;
      this.apiCall();
    }

  }
  loadMore = () => {
    var url = this.state.next;
    if (url != null) {
      this.setState({
        loadMore: true,
      });
      fetch(url).then(response => response.json())
        .then(data => {
          for (var i = 0; i < data.results.length; i++) {
            this.state.items.push(data.results[i]);
            this.state.searchItems.concat(data.results[i])
          }
          this.state.next = data.next;
          this.state.loadMore = false;
          this.setState(
            this.state
          )

        });
    } else {
      alert("There is no more planets to load...")
    }
  };

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

  handleInputChange = (event) => {
    this.setState({ firstLoad: false })
    if (localStorage.getItem('user') == "Luke Skywalker") {
      if(event.target.value.toLowerCase().length==0){
        this.loading=true;
        this.apiCall();
      }else 
      this.searchPlanets("https://swapi.co/api/planets/?search=" + event.target.value.toLowerCase(), event.target.value.toLowerCase())
      return;
    }
    if (this.count === 0) {
      clearTimeout(this.clearCountTimeoutId)
      this.clearCountTimeoutId = setTimeout(this.clearCounter, 60000)
    }
    this.count = this.count + 1;
    if (this.count > 5) {
      alert("reached limit")
    } else {
      if(event.target.value.toLowerCase().length==0){
        this.apiCall();
      }else 
      this.searchPlanets("https://swapi.co/api/planets/?search=" + event.target.value.toLowerCase(), event.target.value.toLowerCase())
    }
  }
  apiCall=()=>{
    this.loading=true;
        fetch("https://swapi.co/api/planets/")
          .then(response => response.json())
          .then(data => {
            this.setState({
              next: data.next,
              items: data.results,
              searchItems: data.results,
              loading: false
            });
  
          });
  }
  clearCounter = () => {
    this.count = 0;
    console.log("Counter Cleared")
  }


  searchPlanets(url, searchKeyword) {
    if (searchKeyword == "") {
      this.setState({ searchItems: this.state.items });
    } else {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({
            next: data.next,
            searchItems: data.results
          });
        })
    }
  }


  render() {
    var user =localStorage.getItem('user');
    var gender = localStorage.getItem('gender')==='male';
     var icon;
      if(gender){
        icon = require('../resource/icon_male.png');
      }else{
        icon = require('../resource/icon-female.png');
      }
    return (
     
      <div className="list" >
       <div class="usercontainer">
       
       <div class="userchildleft">
        <img style={{width:40,height:40}} src={icon} alt=''/> </div>
        <div class="userchildright">
        <b style={{color:'darkGrey'} }>Welcome -{user}</b>
        </div>
        </div>

        <div class="container">
       
          <div class="childleft">
            <form >
              <DebounceInput
                minLength={2}
                debounceTimeout={500} className="inputForm"
                placeholder="Search for Planets..."
                onChange={this.handleInputChange} style={{paddingLeft:10}}
              />
            </form>
          </div>

          <div class="childright">
            <Button onClick={this.loadMore} aria-label="More" variant="outlined" size="large" 
              style={{ color: 'white', background: 'gray', height: 30, marginLeft: 40 }}  >
              {this.state.loadMore ? <CircularProgress size={24} id="progress"
                class="progress" /> : null}
              Load More
      </Button>
          </div>
          <div class="childright">
            <Button onClick={this.handleLogout} aria-label="Delete" variant="outlined" size="large"
              style={{ color: 'white', background: 'blue', height: 30 }}  >
              Logout
      </Button>

          </div>
        </div>
    
        <List items={this.state.searchItems} onItemClick={this.handleItemClick}
          style={{ background: 'black', height: 400 }} />
        {this.state.update ? <Detail show={this.state.showModal} value={this.state.details}
          handleClose={() => this.setState({ showModal: false })} /> : null}
        {this.state.searchItems.length === 0 && !this.state.firstLoad ?
          <div style={{
            justifyContent: 'center'
            , alignItems: 'center',textAlign:'center'          }} > <p style={{ fontSize: 40, color: 'red', marginLeft: 20 }}>There is no planet for given input!!!</p>
            <img style={{ height: 400 }} src={require('../resource/notfound.gif')} />
          </div> : null}
        

      </div>
    );
  }


}

const ListItem = ({ value, onClick }) => (
  <div class="tooltip" style={{
    position: "relative", textAlign: 'center',
    display: "inline-block",
    background: getColor(value.population),
    width: getFontSize(value.population) * 6,
    height: getFontSize(value.population) * 6,
    borderRadius: getFontSize(value.population) * 3,
    margin: 10
  }}>
    <p style={{ fontSize: getFontSize(value.population), color: 'white', padding: 10 }} onClick={onClick}>
      {value.name}
    </p>
    <span class="tooltiptext" style={{}}> <p style={{ width:150, background: getColor(value.population), color: 'lemonchiffon',padding:10,borderRadius:15 }} >
      Polulation <br/> {value.population==='unknown'?"not defined" :<CurrencyFormat value={value.population} displayType={'text'} prefix={''} thousandSeparator={true} />}
    </p></span>
  </div>
);



const List = ({ items, onItemClick }) => (
  <ul>
    {
      items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
    }
  </ul>
);
export default Planet;