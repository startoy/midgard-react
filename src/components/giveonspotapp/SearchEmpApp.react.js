import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class SearchEmpApp extends Component {

  render(){
    return (
      <bs.Form inline>
        <bs.FormGroup bsSize="sm">
          <bs.ControlLabel>Giving to... </bs.ControlLabel>{' '}
          <bs.FormControl
            name="search"
            type="text"
            placeholder="กรอก ชื่อ หรือ รหัสพนักงาน"
            maxLength="24"
            autoFocus
          />
        </bs.FormGroup>
      </bs.Form>
    )
  }
}

export default SearchEmpApp