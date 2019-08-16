import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



class Map extends Component {
    render() {
        const { settlements } = this.props;

        return (
            <div className="map container">
                {settlements && settlements.map(settlement => {
                    return (
                        <Link to={'/settlement/' + settlement.id} key={settlement.id}>
                            <div>
                                settlement.title
                            </div>
                        </Link>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        settlements: state.firestore.ordered.settlements,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'settlements', orderBy: ['title', 'asc'] },
    ])
)(Dashboard)