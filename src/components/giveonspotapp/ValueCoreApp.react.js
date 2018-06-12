import React, { Component } from 'react';
import BTNCoreValueApp from './BTNCoreValueApp.react';
import ReasonCoreValueApp from './ReasonCoreValueApp.react';
import '../css/CoreValueApp.react.css';

import * as bs from 'react-bootstrap';

class ValueCoreApp extends Component {
  constructor(props){
    super(props);
    this.state = { counter : 0 }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._onBTNCoreValueClick = this._onBTNCoreValueClick.bind(this);
    this._getValidationState = this._getValidationState.bind(this);
  }

  _handleSubmit(event) {
    if (this._getValidationState()) {
      // event.preventDefault();
      this.props.btnGiveOnspot();
    }else{
      alert('กรุณาเลือกอย่างน้อย 1');
      event.preventDefault();
    }
  }

  _onBTNCoreValueClick(count){
    this.setState({
      counter : this.state.counter + count
    })
  }

  _getValidationState(){
    let res = false;
    this.state.counter >= 1 ? res=true : res=false;
    /* alert(res); */
    return res;
  }

  render(){
    /* btn Map */
    let btnMapGroup = this.props.valueListDisplay.map((dataObj,index) => {
      return (
        <div key = { index }>
          <BTNCoreValueApp 
            data  = { dataObj } 
            isLoading = {this.props.isLoading}
            onPushReasonGive    = {this.props.onPushReasonGive}
            onRemoveReasonGive  = {this.props.onRemoveReasonGive}
            onBTNCoreValueClick = {this._onBTNCoreValueClick}
          />
        </div>
      );
    });

  return (
    <bs.Form onSubmit={this._handleSubmit}>
    <bs.FormGroup>
    <div style={{float:'left', minWidth:'40%', display:'block'}}>
    <bs.Row>
      <bs.Col xs={12} md={12}>
        <bs.ControlLabel><bs.Image src="/assets/core_value.png" /> FWG Core Values</bs.ControlLabel>
        <bs.Panel>
          <bs.Panel.Body>
            <bs.ButtonToolbar>{btnMapGroup}</bs.ButtonToolbar>
            </bs.Panel.Body>
        </bs.Panel>
      </bs.Col>
    </bs.Row>

      <div>
        <bs.Row><bs.Col xs={12} md={12}>
            <bs.Button
            type  = "submit"
            bsStyle="primary"
            disabled={this.props.isLoading}
            style={{minWidth:'60px'}}>
            {this.props.isLoading ? 'กำลังดำเนินการ...' : 'ส่ง'}
          </bs.Button>
          <br/><bs.Badge>{this.props.isLoading ? 'กรุณาอย่าปิดหน้านี้' : null}</bs.Badge>
          <br/><bs.Button href="/" style={{minWidth:'60px'}}>Back</bs.Button><br/><br/>
        </bs.Col></bs.Row> 
      </div>
    </div>

    <div style={{float:'right', minWidth:'55%', display :'block'}}>
    <bs.Row>
      <bs.Col xs={12} md={12}>
        
        <bs.ControlLabel><bs.Image src="/assets/core_value.png" /> โปรดเลือกหัวข้อค่านิยม</bs.ControlLabel>
        <bs.Panel>
          <bs.Panel.Body><ReasonCoreValueApp 
                              reasonGive          = { this.props.reasonGive}
                              onEditReasonGive    = { this.props.onEditReasonGive }
                              onRemoveReasonGive  = { this.props.onRemoveReasonGive } 
                          /> 
          </bs.Panel.Body>
        </bs.Panel>
      
      </bs.Col>
    </bs.Row>
    </div>

    </bs.FormGroup>
    </bs.Form>
    )
  }
}

/*   ต้อง import มาเป็น lib อีกตัว
ValueCoreApp.propTypes = {
  valueListDisplay : React.PropTypes.array.isRequired,
  reasonGive : React.PropTypes.array,
} */

/* class LoadingButton extends Component {
  constructor(props, context) {
    super(props, context);

    this._handleClick = this._handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }

  _handleClick() {
    this.setState({ isLoading: true }, ()=> {
      // This probably where you would have an `ajax` call
      setTimeout(() => {
        // Completed of async action, set loading state back
        this.setState({ isLoading: false });
      }, 2000)
       // this.props.btnGiveOnspot.then() 
    })
  }

  render() {
    const { isLoading } = this.state;
    return (
      <bs.Button
        type  = "submit"
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this._handleClick : null}
        style={{minWidth:'60px'}}
      >
        {isLoading ? 'กำลังดำเนินการ...' : 'ส่ง'}
      </bs.Button>
    );
  }
} */

export default ValueCoreApp