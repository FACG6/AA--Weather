import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import getData from './utilis/getData'

class App extends Component {
  state = {
    city: '',
    country: '',
    currentWeatherObj: null,
    dayWeatherObj: null,
    nextDays: false,
    latitude: null,
    longitude: null,

  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }
   showPosition = (position) => {
     this.setState({latitude: position.coords.latitude})
     this.setState({longitude: position.coords.longitude})

  }

  componentDidMount() {
    this.getLocation()
    setTimeout(() => {
      getData(null, null, null, this.state.latitude, this.state.longitude)
      .then(data => {
        this.setState({currentWeatherObj: data})
      })
      getData(null, null, null, this.state.latitude, this.state.longitude, 'day')
      .then(data => {
        this.setState({dayWeatherObj: data})
      })
    }, 500)
  }

  handleForm = (event) => {
    event.preventDefault();
    const {city, country} = event.target
    this.setState({city: city.value,
      country: country.value,
      nextDays: false
    })
    getData(this.state.city, this.state.country, 'current')
      .then(data => {
        this.setState({currentWeatherObj: data})
      })
    getData(this.state.city, this.state.country, 'day')
      .then(data => {
        this.setState({dayWeatherObj: data})
      })
  }

  handleInput = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handelButton = () => {
    this.state.nextDays ? this.setState({nextDays: false}) : this.setState({nextDays: true})
  }

  render() {
    return (
      <div className={'body'}>
        <Header nextStatus={this.state.nextDays} handleForm={this.handleForm} state={this.state} handleInput={this.handleInput}/>
        <Body currentObj={this.state.currentWeatherObj} dayObj={this.state.dayWeatherObj} nextStatus={this.state.nextDays} handelButton={this.handelButton}/>
      </div>
    );
  }
}

export default App;