import React, { Component } from 'react'
import '../App.css';
import Location from './Location';

class LocationContainer extends Component {

  renderOneLocation = () => {
    return this.props.locations.map(location => (
      <Location location={location} key={location.id}/>
    ))
  }

  render() {
    //console.log("inside container props", this.props.locations)
    return (
      <div>
        <div id="location-container">
          {this.renderOneLocation()}
        </div>
      </div>
    

    )
  }
}

export default LocationContainer