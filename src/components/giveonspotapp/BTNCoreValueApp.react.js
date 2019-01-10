import React, { Component } from 'react';
import * as bs from 'react-bootstrap';


class BTNCoreValueApp extends Component {
  constructor(props){
    super(props)
    this.state = { isActived : false }
    this._handleClickBTN = this._handleClickBTN.bind(this);
  }

  _handleClickBTN(){
    // 1 เราต้องการทำมันให้เป็น true (ถูกคลิกแล้ว) แต่เช็คแล้วได้ false  ==> เพิ่มเข้าไปในลิสต์ที่เลือก แล้วเปลี่ยนสถานะเป็น true
    // 2 ย้ายการเช็คไปทำ asyn หลัง setState จะได้ไม่งงๆ
    this.state.isActived ? this.props.onRemoveReasonGive(this.props.data) : (this.props.onPushReasonGive({ value : this.props.data.value, name : this.props.data.name, reason  : ""}));
    this.setState({ isActived : !this.state.isActived }, () => {
      this.state.isActived ? this.props.onBTNCoreValueClick(1) : this.props.onBTNCoreValueClick(-1);
    })
  }

  render(){
    const popoverHoverFocus = (
      <bs.Popover id="popover-trigger-hover-focus" /* title="คำอธิบาย" */>
        {this.props.data.name} <strong>!</strong>
      </bs.Popover>
    );

    let btnToggle = this.state.isActived ? 'success' : 'default'; /* do style change */
    return (
      <div style={{ marginLeft:'4%'}}>
        <bs.OverlayTrigger
          trigger={['hover', 'focus']}
          placement="bottom"
          overlay={popoverHoverFocus}
        >
          <bs.Button className="customBTN" bsStyle={btnToggle} onClick={this._handleClickBTN} disabled={this.props.isLoading}>
            <bs.Image src={this.props.data.img} responsive style={{width:''}} />
          </bs.Button>
        </bs.OverlayTrigger>
      </div>
    )
  }
}

export default BTNCoreValueApp