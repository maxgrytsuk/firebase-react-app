import React, { Component } from 'react'
import SettlementList from '../settlements/SettlementList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const { settlements, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SettlementList settlements={settlements} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    settlements: state.firestore.ordered.settlements,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'settlements', orderBy: ['addedAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)