import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class SearchEmpApp extends Component {

  render(){
    return (
      <bs.Form inline>
        <bs.FormGroup>
          <bs.ControlLabel>Giving to...</bs.ControlLabel>{' '}
          <bs.FormControl
            type="text"
            placeholder="Search.."
          />
        </bs.FormGroup>
      </bs.Form>
    )
  }
}

export default SearchEmpApp