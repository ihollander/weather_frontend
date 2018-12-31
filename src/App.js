import React, { Component } from 'react';
import './App.css';
//import LocationContainer from './components/LocationContainer';
import WeatherContainer from './components/WeatherContainer';
import Header from './components/header';

const API = "http://localhost:3000/api/locations"

class App extends Component {

  state={
    weather:[], 
    latitude: "40.7047751", 
    longitude: "-74.013277", 
    locations: "",
    city: ""
  }

  componentDidMount(){
    fetch(API)
      .then(r=>r.json())
      .then(locationArray=>{
        this.setState({
          locations: locationArray
        })
      })
  }

  fetchWeather = () => {
		fetch(
			`http://localhost:3000/api/weather?latitude=${this.state.latitude}&longitude=${this.state.longitude}`
		)
			.then(res => res.json())
			.then(weather => {
				this.setState({ weather });
			})
	};

  handleLocationSearch = (name) => {
    let GoogleApi = "https://maps.googleapis.com/maps/api/geocode/json?address="
        GoogleApi += name + `&key=AIzaSyCzo_yYjLeqwE75EEfITGE_whvhHot6z1k`
        //todo change to env
    fetch(GoogleApi)
      .then(r => r.json())
      .then(cityJSON => {
        this.setState({
          latitude: cityJSON.results[0].geometry.location.lat,
          longitude: cityJSON.results[0].geometry.location.lng,
          city: cityJSON.results[0].formatted_address,
        })
      })
  }


  //<LocationContainer locations={this.state.locations}/>
  render() {
    console.log("in app lat", this.state.latitude)
    console.log("in")
    return (
      <div className="AppContainer">
        <Header handleLocationSearch={this.handleLocationSearch} latitude={this.state.latitude} longtitude={this.state.longitude} city={this.state.city}/>
          <div className="LocationContainer">  
            
          </div>
          <div className="WeatherContainer">
            {this.fetchWeather()}
            <WeatherContainer  weather={this.state.weather} />
          </div>
      </div>
    );
  }
}

export default App;
