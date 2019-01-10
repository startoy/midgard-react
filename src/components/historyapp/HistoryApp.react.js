import React, { Component } from 'react';
import config from '../config';

import * as bs from 'react-bootstrap';

class HistoryApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      history : [],
      log : { status : 0, message : ''}
    }
  }

  renderEachData(){
    return this.state.history.map( (dataObj, index) => {
      return (
        <tr key = {index} >
            <td>{dataObj.id_sender}</td>
            <td>{dataObj.core_type} - {dataObj.description}</td>
            <td>{new Date(dataObj.date).toDateString()}</td>
        </tr>
      )
    })
  }

  _fetchHistory(){
    console.log('fetHistory');
    this.setState({
      isLoading : !this.state.isLoading
     })
      fetch(config.url+'/sol/emp/history', {
        method : 'POST',
        headers : {
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
          console.log("response -> "+ JSON.stringify(resJson));
          this.setState({
            log : { status : resJson.status, message : resJson.message },
            isLoading : !this.state.isLoading,
            history : resJson.body
          });
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            log : { status : 0 , message : "ทำรายการไม่สำเร็จ" },
            isLoading : !this.state.isLoading,
            history : [
              { 
               sender : "Peerapat Suksri",
               round : "2/2018",
               date : "2018-06-04"
              },
              { 
               sender : "Makoto Ogami",
               round : "2/2018",
               date : "2018-06-02"
              },
              { 
               sender : "Kristoferson Silverfox",
               round : "1/2018",
               date : "2018-03-22"
              },
              { 
               sender : "Minamoto Shizuka",
               round : "1/2017",
               date : "2017-06-10"
              },
              { 
               sender : "Nobi Nobita",
               round : "1/2017",
               date : "2017-06-09"
              },
              { 
                id_sender : "Koda Takeshi",
                description : "1/2017",
               date : "2017-06-14"
              }
           ]
          })
          
        });
  }

  componentDidMount(){
    this._fetchHistory();
  }

  render(){
    let Tablebody = this.renderEachData();
    return (
      <bs.Grid>
      {this.props.address}
      <bs.Table responsive hover striped bordered>
        <thead><tr><th>มอบโดย</th><th>รอบกิจกรรม</th><th>ส่งเมื่อ</th></tr></thead>
        <tbody>
          {Tablebody}
        </tbody>
      </bs.Table>
      <bs.Button onClick={this.props.setDisplayForm}>Back</bs.Button><br/>
      </bs.Grid>
      );
  }
}

export default HistoryApp;