import React, { Component } from 'react';
import SearchEmpApp from './SearchEmpApp.react';
import ValueCoreApp from './ValueCoreApp.react';
import * as bs from 'react-bootstrap';

class GiveOnSpotApp extends Component {
  //Constructor props
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {},
      reasonGive : [ /* { value : 1, reason : "eieie" } */ ],
      valueListDisplay : [
        { value : 1, name : "3 useful", img : "" },
        { value : 2, name : "fast & efficient", img : "" },
        { value : 3, name : "make it easy!", img : "" },
        { value : 4, name : "new line", img : ""},
        { value : 5, name : "option5", img : "" },
        { value : 6, name : "option6", img : "" }
      ]
    }

    this.pushCoreValueGive    = this.pushCoreValueGive.bind(this);
    this.editCoreValueGive    = this.editCoreValueGive.bind(this);
    this.removeCoreValueGive  = this.removeCoreValueGive.bind(this);
  }

    pushCoreValueGive (CoreValueGiveObj){
      let temp  = this.state.reasonGive
      temp.push(CoreValueGiveObj)

      this.setState({
        reasonGive : temp
      })
    }

    editCoreValueGive (CoreValueGiveObj){
     // let arrIndex = this.state.reasonGive.indexOf(CoreValueGiveObj)
    }

    removeCoreValueGive (CoreValueGiveObj){
        //let index = this.state.reasonGive.indexOf(CoreValueGiveObj)
        let index = this.state.reasonGive.findIndex(d => d.value === CoreValueGiveObj.value)
        let temp  = this.state.reasonGive
        temp.splice(index, 1)
        this.setState({ reasonGive : temp })
    }

    /* async function blockchainUpdate(){ try{}catch{} } */
    _giveOnspot(){
      return fetch('', {
        method : 'POST',
        header : {
          Accept : 'application/json',
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
          To : '',
          From : '',
          reason : this.state.reasonGive
        }),
      })
        .then((res) => res.json())
        .then((resJson) => {
          return resJson;
        })
        .catch((err) => {
          console.error(err);
        });
    }

  render() {
    
    return (
      <bs.Grid>
        <bs.Row><bs.Col xs={12} md={12}>
                <bs.PageHeader>Blockchain Onspot</bs.PageHeader>
        </bs.Col></bs.Row>

        <bs.Row><bs.Col xs={4} md={6}>
                <SearchEmpApp />
        </bs.Col></bs.Row>
        {/* <div>text : {alert(JSON.stringify(this.state.valueListDisplay[0]))}</div> */}

          <bs.Row><bs.Col xs={12} md={12}>
                <ValueCoreApp 
                    reasonGive          = {this.state.reasonGive}
                    valueListDisplay    = { this.state.valueListDisplay }
                    onPushReasonGive    = { this.pushCoreValueGive }
                    onEditReasonGive    = { this.editCoreValueGive }
                    onRemoveReasonGive  = { this.removeCoreValueGive }
                />
          </bs.Col></bs.Row>
      </bs.Grid>
    )
  }
}

export default GiveOnSpotApp