import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class ReasonValueItem extends Component {

  _handleChange(event){
    let reasonMsg = event.target.value;
    this.props.onEditReasonGive(this.props.data, reasonMsg)
  }
  render(){
    
    return (
      <div className="#">
            <bs.ControlLabel>{this.props.data.name}</bs.ControlLabel>
            <bs.FormControl name="reason" type="text" placeholder="เหตุผล" onChange={this._handleChange.bind(this)} />
      </div>
    )
  }
}

export default ReasonValueItem