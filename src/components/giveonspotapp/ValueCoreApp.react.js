import React, { Component } from 'react';
import BTNToggleReason from './BTNToggleReason.react';
import ReasonValueApp from './ReasonValueApp.react';

import * as bs from 'react-bootstrap';

class ValueCoreApp extends Component {

  render(){

    let i = 0;
    /* btn Map */
    let btnMapGroup = this.props.valueListDisplay.map((dataObj,index) => {
      i++;
      if(i===4) i = 0;
      var newLine = (i === 3) ? <br /> : null ;
      return (
        <div key = { index }>
          <BTNToggleReason 
            data  = { dataObj } 
            onPushReasonGive    = {this.props.onPushReasonGive}
            onRemoveReasonGive  = {this.props.onRemoveReasonGive}
          />
          {newLine}
        </div>
      );
    });

    /* reasonItem map */
/*     let reasonMapGroup = this.props.reasonGive.map((dataObj, index) => {
      
      return();
    }); */

  return (
    <bs.Form >
    <bs.FormGroup>
    <br/>
    <bs.Row >
      <bs.Col xs={5} md={5}>
        <bs.ControlLabel>FWG Core Values</bs.ControlLabel>
        <bs.Panel>
          <bs.Panel.Body>
            <bs.ButtonToolbar>{btnMapGroup}</bs.ButtonToolbar>
            </bs.Panel.Body>
        </bs.Panel>
      </bs.Col>

      <bs.Col xs={7} md={7}>
        <bs.FormGroup controlId="formControlsTextarea">
        <bs.ControlLabel>โปรดเลือกหัวข้อค่านิยม</bs.ControlLabel>
        {/* <bs.FormControl bsSize='sm' maxLength='200' componentClass="textarea" placeholder="โปรดเลือกค่านิยม" /> */}
        <bs.Panel>
          <bs.Panel.Body> <ReasonValueApp 
                              reasonGive          = {this.props.reasonGive}
                              onEditReasonGive    = { this.props.onEditReasonGive }
                              onRemoveReasonGive  = { this.props.onRemoveReasonGive } 
                          /> 
          </bs.Panel.Body>
        </bs.Panel>
      </bs.FormGroup>
      </bs.Col>
    </bs.Row>
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

export default ValueCoreApp