import React, { Component } from 'react';
import * as bs from 'react-bootstrap';
import GiveOnSpotApp from './giveonspotapp/GiveOnSpotApp.react';
import HistoryApp from './historyapp/HistoryApp.react';
import RedeemApp from './redeemapp/RedeemApp.react';
import { Link } from 'react-router-dom';

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
    this.setState({
      address2 : data.get('address2'),
      menu     : data.get('menu'),
      isDisPlayForm : !this.state.isDisPlayForm
    }, () => alert("Addr1:"+this.state.address1+"\nAddr2:"+this.state.address2+"\nState:"+this.state.isDisPlayForm+"\nMenu:"+this.state.menu) );

    if(!data.get('address1')==="" || !data.get('address1')===null)
      this.setState({
        address1 : data.get('address1')
      })
    event.preventDefault();
  }

  _displayForm(){
    return (
      <bs.Form onSubmit={this._handleClick.bind(this)}>
      <bs.FormGroup>
            <bs.Row><bs.Col xs={4} md={4} xsOffset={2} mdOffset={2}>
              <bs.ControlLabel><small>Address 1</small></bs.ControlLabel>
              <bs.FormControl name="address1" type="text" placeholder="address sender (login account)" maxLength="40" /* pattern="\d+" */ autoFocus/>
              <bs.FormControl.Feedback />
            </bs.Col></bs.Row>

            <bs.Row><bs.Col xs={4} md={4} xsOffset={2} mdOffset={2}>
              <bs.ControlLabel><small>Address 2</small></bs.ControlLabel>
              <bs.FormControl name="address2" type="text" placeholder="address receiver" maxLength="40" /* pattern="\d+" */ autoFocus/>
              <bs.FormControl.Feedback />
            </bs.Col></bs.Row>

            <bs.Row><bs.Col xs={4} md={4} xsOffset={2} mdOffset={2}>
              <bs.Radio name="menu" value="onspot" inline checked>
                Onspot
              </bs.Radio>{' '}
              <bs.Radio name="menu" value="redeem" inline>
                Redeem
              </bs.Radio>{' '}
              <bs.Radio name="menu" value="history" inline>
                History
              </bs.Radio>
            </bs.Col></bs.Row>
            <br />
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

  _displayLink(){
    return (
      <bs.Row><bs.Col xs={4} md={4} xsOffset={2} mdOffset={2}>
      ==== Temp menu : to be remove ====<br />
        <Link to="give" > Onspot </Link> <br />
        <Link to="redeem" > Redeem </Link> <br />
        <Link to="history" > History </Link> <br />
        <Link to="search" > Search </Link> <br />
      ==============================<br />
      </bs.Col></bs.Row>
      )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.address1 !== this.state.address1) {
      this.setState({ address1: nextProps.address1 });
    }
  }

  _goMenu(){
    if(this.state.menu==="onspot")        return <GiveOnSpotApp address1={this.state.address1} address2={this.state.address2} />
    else if(this.state.menu==="redeem")   return <RedeemApp address={this.state.address1} />
    else if(this.state.menu==="history")  return <HistoryApp address={this.state.address1} />
    else return <GiveOnSpotApp address1={this.state.address1} address2={this.state.address2} />
  }

  render(){
    return(
      <div>
        {/* FIXME: menu no validate */}
        {this.state.isDisPlayForm ? this._displayForm() : this._goMenu() }
        <br />
        {this.state.isDisPlayForm ? this._displayLink() : null }
      </div>
    )
  }
}

export default HomeApp;