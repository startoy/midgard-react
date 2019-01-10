import React, { Component } from 'react';
import SearchEmpApp from './SearchEmpApp.react';
import ValueCoreApp from './ValueCoreApp.react';
import * as bs from 'react-bootstrap';
import config from '../config';


class GiveOnSpotApp extends Component {
  //Constructor props
  constructor(props) {
    super(props);
    this.state = {
      myInfo : { address : "0x000000000000000000000", emp_id : "00000" },
      isLoading : false,
      reasonGive : [ ],
      valueListDisplay : [
        { value : 1, name : "สามประโยชน์", img : "/assets/101.png" },
        { value : 2, name : "ทำเร็วมีคุณภาพ", img : "/assets/102.png" },
        { value : 3, name : "ทำเรื่องยากให้เป็นเรื่องง่าย", img : "/assets/103.png" },
        { value : 4, name : "ยอมรับการเปลี่ยนแปลง", img : "/assets/104.png"},
        { value : 5, name : "สร้างสรรค์สิ่งใหม่", img : "/assets/105.png" },
        { value : 6, name : "มีคุณธรรมและความซื่อสัตย์", img : "/assets/106.png" }
      ],
      selected : null ,
      log : { status : 0, message : '' }
    }

    this.baseState = this.state;
    this._pushCoreValueGive    = this._pushCoreValueGive.bind(this);
    this._editCoreValueGive    = this._editCoreValueGive.bind(this);
    this._removeCoreValueGive  = this._removeCoreValueGive.bind(this);
    this._API_giveOnspot       = this._API_giveOnspot.bind(this);
    this._changeSearch         = this._changeSearch.bind(this);
  }

    _pushCoreValueGive (CoreValueGiveObj){
      let temp  = this.state.reasonGive
      temp.push(CoreValueGiveObj)
      this.setState({
        reasonGive : temp
      })
    }

    _editCoreValueGive (CoreValueGiveObj, reasonMsg){
      let index = this.state.reasonGive.findIndex(d => d.value === CoreValueGiveObj.value)
      let temp  = this.state.reasonGive
      temp[index].reason = reasonMsg
      this.setState({ 
        reasonGive : temp }, ()=>{ console.log(JSON.stringify(this.state.reasonGive))})
    }

    _removeCoreValueGive (CoreValueGiveObj){
      //let index = this.state.reasonGive.indexOf(CoreValueGiveObj)
      let index = this.state.reasonGive.findIndex(d => d.value === CoreValueGiveObj.value)
      let temp  = this.state.reasonGive
      temp.splice(index, 1)
      this.setState({ 
        reasonGive : temp })
    }

    _changeSearch(obj){
      console.log(obj);
      this.setState({ 
        selected : obj })
    }
    
    _API_giveOnspot(){
     alert('giving with first reason..[ Val:' + this.state.reasonGive[0].value + " Reason:" + this.state.reasonGive[0].reason + " ]");
     this.setState({
      isLoading : !this.state.isLoading
     })
      fetch(config.url+'/sol/emp/give', {
        method : 'POST',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
          "sender" : this.props.address1,
          "reciever" : this.props.address2,
          "coreValue" : this.state.reasonGive[0].value,
          "description" : this.state.reasonGive[0].reason,
          "callerAddress" : this.props.address1
        }),
      })
        .then((res) => res.json())
        .then((resJson) => {
          console.log("response -> "+ JSON.stringify(resJson));
          this.setState({
            log : { status : resJson.status, message : resJson.message },
            reasonGive : [],
            isLoading : !this.state.isLoading
          });
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            log : { status : 0 , message : "ทำรายการไม่สำเร็จ" },
            reasonGive : [],
            isLoading : !this.state.isLoading
          })
          
        });
    }

  render() {
    let alertMsg, alertStyle;
    this.state.log.status === "1" || this.state.log.status === 1 ? alertStyle = "success" : alertStyle = "danger";
    this.state.log.message === null || this.state.log.message === "" ? alertMsg = "" : alertMsg = <div><bs.Alert bsStyle={alertStyle}>{this.state.log.message}</bs.Alert></div>;
    return (
      <bs.Grid>
        
        <bs.Row><bs.Col xs={12} md={12}>
          <bs.PageHeader>Blockchain Onspot</bs.PageHeader>
        </bs.Col></bs.Row>

        <bs.Row><bs.Col xs={12} md={12}>
          {alertMsg}
        </bs.Col></bs.Row>

        <bs.Row><bs.Col xs={12} md={12}>
          <SearchEmpApp
            selected       = {this.state.selected}
            onChangeSearch = {this._changeSearch} 
            isLoading      = { this.state.isLoading }/>
        </bs.Col></bs.Row>
        
        <ValueCoreApp 
            reasonGive          = { this.state.reasonGive}
            valueListDisplay    = { this.state.valueListDisplay }
            onPushReasonGive    = { this._pushCoreValueGive }
            onEditReasonGive    = { this._editCoreValueGive }
            onRemoveReasonGive  = { this._removeCoreValueGive }
            btnGiveOnspot       = { this._API_giveOnspot  }
            isLoading           = { this.state.isLoading  }
            setDisplayForm      = { this.props.setDisplayForm } /* button "Back" handle */
        />

      </bs.Grid>
    )
  }
}

export default GiveOnSpotApp