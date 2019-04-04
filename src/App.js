import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import getData from './utilis/getData'

class App extends Component {
  state = {
    city: '',
    country: '',
    dayWeatherObj: null
  }

  handleForm = (event) => {
    event.preventDefault();
    const {city, country} = event.target
    this.setState({city: city.value,
      country: country.value
    })
    getData(this.state.city, this.state.country)
      .then(data => {
        this.setState({dayWeatherObj: data})
      })
  }

  handleInput = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <Header handleForm={this.handleForm} state={this.state} handleInput={this.handleInput}/>
        <Body result={this.state.dayWeatherObj}/>
      </div>
    );
  }
}

export default App;
