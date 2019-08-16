import React from 'react'
import moment from 'moment'

const SettlementSummary = ({settlement}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{settlement.title}</span>
        <p>Added by {settlement.profileFirstName} {settlement.profileLastName}</p>
        <p className="grey-text">{moment(settlement.addedAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default SettlementSummary
