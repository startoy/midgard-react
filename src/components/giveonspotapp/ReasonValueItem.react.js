import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class ReasonValueItem extends Component {

  render(){
    
    return (
      <div className="#">
        
            <bs.ControlLabel>{this.props.data.name}</bs.ControlLabel>
            <bs.FormControl type="text" placeholder="เหตุผล" />
          
      </div>
    )
  }
}

export default ReasonValueItem