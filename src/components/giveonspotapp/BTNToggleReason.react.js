import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class BTNToggleReason extends Component {
  constructor(props){
    super(props)
    this.state = { isActived : false }

    this.handleClickBTN = this.handleClickBTN.bind(this);
  }

  handleClickBTN(){

    if(!this.state.isActived){
      let newReasonItem = {
        value   : this.props.data.value,
        name    : this.props.data.name,
        reason  : ""
      }
      
      this.props.onPushReasonGive(newReasonItem);
    }else{
      this.props.onRemoveReasonGive(this.props.data);
    }

    this.setState({ isActived : !this.state.isActived })
    
  }

  render(){
    let value = JSON.stringify(this.props.data.value);
    let description = this.props.data.name;
    let nameDisplay = value + ". " + description;
    let btnToggle = this.state.isActived ? 'success' : 'primary'; /* do style change */
    // let btnStyle = { marginBottom : '15px' };
    return (
      <div className="btnValueGive" >
        <bs.Button  bsStyle={btnToggle} bsSize="small" onClick={this.handleClickBTN}>{nameDisplay}</bs.Button>
      </div>
    )
  }
}

export default BTNToggleReason