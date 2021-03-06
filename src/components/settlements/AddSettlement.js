import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSettlement } from '../../store/actions/settlementActions'
import { Redirect } from 'react-router-dom'

class AddSettlement extends Component {
  state = {
    title: '',
    longitude: '',
    latitude: '',
    link: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSettlement(this.state);
    this.props.history.push('/dashboard');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a New Settlement</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
          <input type="text" id='link' onChange={this.handleChange} />
            <label htmlFor="link">Link</label>
          </div>
          <div className="input-field">
          <input type="text" id='latitude' onChange={this.handleChange} />
            <label htmlFor="latitude">Latitude</label>
          </div>
          <div className="input-field">
          <input type="text" id='longitude' onChange={this.handleChange} />
            <label htmlFor="longitude">Longitude</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSettlement: (settlement) => dispatch(addSettlement(settlement))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSettlement)