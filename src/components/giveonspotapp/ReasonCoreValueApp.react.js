import React, { Component } from 'react';
import ReasonCoreValueItem from './ReasonCoreValueItem.react';

class ReasonCoreValueApp extends Component {

  render(){
    let fieldMapGroup = this.props.reasonGive.map((dataObj, index) => {
      return (
        <div key = { index }>
          <ReasonCoreValueItem 
            data = {dataObj}
            onEditReasonGive    = { this.props.onEditReasonGive }
            onRemoveReasonGive  = { this.props.onRemoveReasonGive }
            />
        </div>
      )
    })

    return (
      <div >{fieldMapGroup}</div>
    )
  }
}

export default ReasonCoreValueApp