import React, { Component } from 'react';
import config from '../config';

import * as bs from 'react-bootstrap';

class RedeemApp extends Component{

  constructor(props){
    super(props);
    this.state = {
      items : [],
      tickets : 0,
      log : { status : 0, message : ''}
    }
  }

  renderEachItems(){
    return this.state.items.map( (dataObj, index) => {
      /* TODO: ส่ง dataObj เข้าไปอีก component ให้อันนั้น render แล้วมีการคลิกแลกเกิดขึ้นทำต่อ */
      return (
        <tr key = {index} >
            <td>{dataObj.name}</td>
            <td>{dataObj.value}</td>
            <td>{dataObj.redeem}</td>
            <td>{dataObj.amount}</td>
        </tr>
      )
    })
  }

  _fetchItems(){
    /* FETCH ITEMS */
    /* return fetch( config.url+"api", {
      method : 'POST',
      header : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        "address" : this.props.address,
        "callerAddress" : this.props.address
      }),
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log("response ->" + JSON.stringify(resJson));
      this.setState({
        log : { status : resJson.status, message : resJson.message },
        item :  resJson.body,
      })
    })
    .catch((error) => {
      console.error(error);
      this.setState({
        log : { status : 0, message : resJson.message },
      }) */
  }

  _fetchTickets(){
    /* FETCH TICKETS (id, name, onspot, ticket) */
    /* return fetch( config.url+"api", {
      method : 'POST',
      header : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        "address" : this.props.address,
        "callerAddress" : this.props.address
      }),
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log("response ->" + JSON.stringify(resJson));
      this.setState({
        log : { status : resJson.status, message : resJson.message },
        tickets :  resJson.body,
      })
    })
    .catch((error) => {
      console.error(error);
      this.setState({
        log : { status : 0, message : resJson.message },
      }) */
  }

  componentDidMount(){
    return this.setState({
      items: [{
          name: "Swensens 100 Baht",
          value: 100,
          redeem: 2,
          amount: 20
        },
        {
          name: "The Pizza Company",
          value: 100,
          redeem: 2,
          amount: 10
        },
        {
          name: "After You Dessert Cafe",
          value: 50,
          redeem: 1,
          amount: 93
        },
        {
          name: "คูปองเงินสดสำหรับใช้ซื้อสินค้าในเครือ CP ที่จำหน่าย@THE FUSE 29th",
          value: 50,
          redeem: 1,
          amount: 99
        }
      ]
    });
    
      /* FETCH ITEMS */
      this._fetchItems();
      /* FETCH EMPLOYEE */
      this._fetchTickets();
  }

  render(){
    let Tablebody = this.renderEachItems();
    
    return (
      <bs.Grid>
      {this.props.address}
      <bs.Table responsive hover striped bordered>
        <thead><tr><th>ของรางวัล</th><th>มูลค่า (บาท)</th><th>จำนวน On Spot ที่ใช้แลก</th><th>ยอดคงเหลือปัจจุบัน (ชิ้น)</th></tr></thead>
        <tbody>
          {Tablebody}
        </tbody>
      </bs.Table>
      <bs.Button href="/">Back</bs.Button><br/>

      </bs.Grid>
      );
  }
}

export default RedeemApp;