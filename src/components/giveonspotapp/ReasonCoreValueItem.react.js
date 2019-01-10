import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class ReasonCoreValueItem extends Component {
  constructor(props){
    super(props); 
    this.state = {  validStrLen : 5 }

  }

  _handleInputChange(event){
    if(this.props.isLoading)
      return
    let reasonMsg = event.target.value;
    this.props.onEditReasonGive(this.props.data, reasonMsg)
  }

  getValidationState(){
    const length = this.props.data.reason.length;
    if(length >= this.state.validStrLen) return 'success';
    else if (length < this.state.validStrLen ) return 'error';
    return null;
  }

  render(){
    let InputText = this.props.isLoading ? <bs.FormControl type="text" placeholder="เหตุผล" onChange={this._handleInputChange.bind(this)} maxLength="200" minLength={this.state.validStrLen} /* pattern="\d+" */ disabled /> : <bs.FormControl type="text" placeholder="เหตุผล" onChange={this._handleInputChange.bind(this)} maxLength="200" minLength={this.state.validStrLen} /* pattern="\d+" */ />
    return (
      <div className="#">
      <bs.FormGroup controlId="formText" validationState={this.getValidationState()}> 
            <bs.ControlLabel><small>{this.props.data.name}</small></bs.ControlLabel>
            {InputText}
            <bs.FormControl.Feedback />
      </bs.FormGroup>
      </div>
    )
  }
}

export default ReasonCoreValueItem