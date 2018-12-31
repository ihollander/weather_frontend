import React, { Component } from 'react'

class Location extends Component {
  render() {
    //console.log("inside location prop", this.props)
    return (
      <div >
        <div>{this.props.location.name}</div>
      </div>
    )
  }
}

export default Location