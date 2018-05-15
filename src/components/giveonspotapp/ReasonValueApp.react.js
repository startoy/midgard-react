import React, { Component } from 'react';
import ReasonValueItem from './ReasonValueItem.react';

class ReasonValueApp extends Component {

  render(){
    let fieldMapGroup = this.props.reasonGive.map((dataObj, index) => {
      return (
        <div key = { index }>
          <ReasonValueItem 
            data = {dataObj}
            onEditReasonGive    = { this.props.onEditReasonGive }
            onRemoveReasonGive  = { this.props.onRemoveReasonGive }
            />
        </div>
      )
    })
    return (
      <div>{fieldMapGroup}</div>
    )
  }
}

export default ReasonValueApp