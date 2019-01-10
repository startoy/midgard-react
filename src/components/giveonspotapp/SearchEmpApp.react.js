import React, { Component } from 'react';
import * as bs from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SearchEmpApp extends Component {

  _handleChange = (selected) => {
    this.props.onChangeSearch(selected)
  }

  render(){
    const options = [
      {label : 'Wakanda', value : 'wkd'},
      {label : 'Thailand', value : 'th'},
      {label : 'FWG', value : 'fwg'},
    ]
    const selected = this.props.selected;
    return (
        <bs.Row><bs.Col xs={5} md={5}>
          <bs.ControlLabel>Giving to... </bs.ControlLabel>{' '}
          <Select
            name="search"
            onChange={this._handleChange}
            value={selected}
            autoFocus
            options={options}
            disabled={this.props.isLoading ? true : false}
          />
        </bs.Col></bs.Row>
      
    )
  }
}

export default SearchEmpApp