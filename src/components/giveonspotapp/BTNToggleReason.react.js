import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class BTNToggleReason extends Component {
  constructor(props){
    super(props)
    this.state = { isActived : false }

    this._handleClickBTN = this._handleClickBTN.bind(this);
  }

  _handleClickBTN(){
    /* if(!this.state.isActived){
      let newReasonItem = {
        value   : this.props.data.value,
        name    : this.props.data.name,
        reason  : ""
      }
      this.props.onPushReasonGive(newReasonItem);
    }else{
      this.props.onRemoveReasonGive(this.props.data);
    } */

    // 1 เราต้องการทำมันให้เป็น true (ถูกคลิกแล้ว) แต่เช็คแล้วได้ false  ==> เพิ่มเข้าไปในลิสต์ที่เลือก แล้วเปลี่ยนสถานะเป็น true
    // 2 ย้ายการเช็คไปทำ asyn หลัง setState จะได้ไม่งงๆ
    this.state.isActived ? this.props.onRemoveReasonGive(this.props.data) : (this.props.onPushReasonGive({ value : this.props.data.value, name : this.props.data.name, reason  : ""}));
    this.setState({ isActived : !this.state.isActived })
  }

  render(){
    let value = JSON.stringify(this.props.data.value);
    let description = this.props.data.name;
    let nameDisplay = value + ". " + description;
    let btnToggle = this.state.isActived ? 'success' : 'default'; /* do style change */
    // let btnStyle = { marginBottom : '15px' };
    return (
      <div className="btnValueGive" >
        <bs.Button  bsStyle={btnToggle} bsSize="small" onClick={this._handleClickBTN}>{nameDisplay}</bs.Button>
      </div>
    )
  }
}

export default BTNToggleReason