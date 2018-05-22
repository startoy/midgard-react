import React, { Component } from 'react';
/* import * as bs from 'react-bootstrap'; */
import GiveOnSpotApp from './giveonspotapp/GiveOnSpotApp.react';

class HomeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      address1 : "23C43767722D1F909C35BC9A9E7185F3FA182E6C",
      address2 : "C5F3FBB74622C31C7520D3F9954CB2E6FAF27B83",
      emp1 : "",
      emp2 : ""
    }
  }
  render(){
    return(
      <GiveOnSpotApp address1={this.state.address1} address2={this.state.address2} />
    )
  }
}

export default HomeApp;