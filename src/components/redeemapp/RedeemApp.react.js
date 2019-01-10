import React, { Component } from 'react';
import config from '../config';

import * as bs from 'react-bootstrap';

class RedeemApp extends Component{

  constructor(props){
    super(props);
    this.state = {
      items : [],
      isLoading : false,
      empInfo : { },
      log : { status : 0, message : ''}
    }

    this._fetchItems = this._fetchItems.bind(this)
    this._fetchTickets = this._fetchTickets.bind(this)
  }

  _renderEachItems(){
    return this.state.items.map( (item, index) => {
      /* TODO: ส่ง item เข้าไปอีก component ให้อันนั้น render แล้วมีการคลิกแลกเกิดขึ้นทำต่อ */
      return (
        <tr key = {index} >
            <td>{item.name}</td>
            <td>{item.value}</td>
            <td>{item.price}</td>
            <td>{item.amount}</td>
        </tr>
      )
    })
  }

  _fetchItems(){
    this.setState({
      isLoading : !this.state.isLoading
     })
    /* getStockList()*/
    console.log("fetch Items");
     fetch( config.url+"/sol/stock/get", {
      method : 'POST',
      header : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        "callerAddress" : this.props.address
      }),
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log("response -> " + JSON.stringify(resJson));
      this.setState({
        log : { status : resJson.status, message : resJson.message },
        items :  resJson.body,
        isLoading : !this.state.isLoading
      })
    })
    .catch((error) => {
      console.error(error);
      this.setState({
        log : { status : 0, message : "ทำรายการไม่สำเร็จ" },
        isLoading : !this.state.isLoading,
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
        }]
      })
    })
  }
  

  _fetchTickets(){
    this.setState({
      isLoading : !this.state.isLoading
     })
    /* getStockList()*/
    console.log("fetch Employee ",this.props.address);
     fetch( config.url+"/sol/emp/get", {
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
      console.log("response -> " + JSON.stringify(resJson));
      this.setState({
        log : { status : resJson.status, message : resJson.message },
        empInfo :  resJson.body[0],
        isLoading : !this.state.isLoading
      })
    })
    .catch((error) => {
      console.error(error);
      this.setState({
        log : { status : 0, message : "ทำรายการไม่สำเร็จ" },
        isLoading : !this.state.isLoading,
        empInfo: {
          id : 2169,
          name : "Makoto Ogami",
          onspot : 3,
          ticket : 2,
        }
      })
    })
  }

  _give(){
    fetch(config.url+'/sol/emp/give', {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        "sender" : "5512141C4959F807BE498C9189C1729918855FFA",
        "reciever" : "777010509C09123710A10B68D2DBFA4665B7B9C6",
        "coreValue" : 4,
        "description" : "TESTSSS",
        "callerAddress" : this.props.address1
      }),
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log("response -> ", JSON.stringify(resJson));
    })
  }

/*   componentDidMount(){
    this._fetchTickets()
    .then(()=>{
      this._fetchItems()
    })
  } */
  
/* 
if need custom behavior use handle Funcion
  _handleClickBack(){
    this.props.setDisplayForm();
  } 
*/
  
  render(){
    
    let Loading   = "Loading stock...";
    let TableBody = this.state.isLoading ? <tr><td colSpan={4}>{Loading}</td></tr> : this._renderEachItems();

    let emp = this.state.empInfo;
    let empInfo = this.state.isLoading ? 'Loading info..' : <p>id : {emp.id}, name : {emp.name}, ticket : {emp.ticket}, onspot : {emp.onspot}</p>;
    
    return (
      <bs.Grid>
      <p>address : {this.props.address}</p>
      {empInfo}

      <bs.Table responsive hover striped bordered>
        <thead><tr><th>ของรางวัล</th><th>มูลค่า (บาท)</th><th>จำนวน On Spot ที่ใช้แลก</th><th>ยอดคงเหลือปัจจุบัน (ชิ้น)</th></tr></thead>
        <tbody>
          {TableBody}
        </tbody>
      </bs.Table>
      <bs.Button onClick={this.props.setDisplayForm}>Back</bs.Button><br/>

       <bs.Button onClick={this._fetchTickets}>fetch info</bs.Button><br/>
      <bs.Button onClick={this._fetchItems}>fetch stock</bs.Button><br/>
      <bs.Button onClick={this._give}>give</bs.Button><br/>
      </bs.Grid>
      );
  }
}

export default RedeemApp;