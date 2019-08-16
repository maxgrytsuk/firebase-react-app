import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const SettlementDetails = (props) => {
  const { settlement, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (settlement) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{settlement.title}</span>
            <p>{settlement.link}</p>s
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {settlement.profileFirstName} {settlement.profileLastName}</div>
            <div>{moment(settlement.addedAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading settlement...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const settlements = state.firestore.data.settlements;
  const settlement = settlements ? settlements[id] : null
  return {
    settlement,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'settlements'
  }])
)(SettlementDetails)
