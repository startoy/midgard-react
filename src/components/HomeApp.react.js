import React, { Component } from 'react';
import * as bs from 'react-bootstrap';
import GiveOnSpotApp from './giveonspotapp/GiveOnSpotApp.react';

class HomeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      address1 : "23C43767722D1F909C35BC9A9E7185F3FA182E6C",
      address2 : "C5F3FBB74622C31C7520D3F9954CB2E6FAF27B83",
      emp1 : "",
      emp2 : "",
      isDisPlayForm : true,
    }
  }

  _handleClick(event){
    const data = new FormData(event.target);
    console.log(data.get('address1'));
    this.setState({
      address1 : data.get('address1'),
      address2 : data.get('address2'),
      isDisPlayForm : !this.state.isDisPlayForm
    }, () => alert("Addr1:"+this.state.address1+"\nAddr2:"+this.state.address2+"\nState:"+this.state.isDisPlayForm) )
    event.preventDefault();
  }

  _displayForm(){
    return (
      <bs.Form onSubmit={this._handleClick.bind(this)}>
      <bs.FormGroup>
            <bs.Row><bs.Col xs={4} md={4} xsOffset={2} mdOffset={2}>
              <bs.ControlLabel><small>Address 1</small></bs.ControlLabel>
              <bs.FormControl name="address1" type="text" placeholder="address sender" maxLength="40" /* pattern="\d+" */ autoFocus/>
              <bs.FormControl.Feedback />
            </bs.Col></bs.Row>
            <bs.Row><bs.Col xs={4} md={4} xsOffset={2} mdOffset={2}>
              <bs.ControlLabel><small>Address 2</small></bs.ControlLabel>
              <bs.FormControl name="address2" type="text" placeholder="address receiver" maxLength="40" /* pattern="\d+" */ autoFocus/>
              <bs.FormControl.Feedback />
              <br />
            </bs.Col></bs.Row>
            <bs.Row><bs.Col xs={10} md={10} xsOffset={2} mdOffset={2}>
              <bs.Button
              type  = "submit"
              bsStyle="primary"
              style={{minWidth:'60px'}}>
              Go
            </bs.Button>
          </bs.Col></bs.Row>
      </bs.FormGroup>
      </bs.Form>);
  }

  render(){
    return(
      this.state.isDisPlayForm ? this._displayForm() : <GiveOnSpotApp address1={this.state.address1} address2={this.state.address2}/>
    )
  }
}

export default HomeApp;