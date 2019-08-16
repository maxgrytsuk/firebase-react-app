import React from 'react'
import SettlementSummary from './SettlementSummary'
import { Link } from 'react-router-dom'

const SettlementList = ({settlements}) => {
  return (
    <div className="project-list section">
      { settlements && settlements.map(settlement => {
        return (
          <Link to={'/settlement/' + settlement.id} key={settlement.id}>
            <SettlementSummary settlement={settlement} />
          </Link>
        )
      })}  
    </div>
  )
}

export default SettlementList