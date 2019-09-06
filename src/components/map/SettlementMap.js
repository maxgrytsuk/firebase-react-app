import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import GoogleMapReact from 'google-map-react'

const DEFAULT_CENTER = { lat: 49.027500, lng: 31.482780 }; // geographical center of Ukraine
const DEFAULT_ZOOM = 6;

const MarkerComponent = ({ text }) => <div style={{color: 'green', backgroundColor: 'white' }}>{text}</div>;

class SettlementMap extends Component {
    render() {
        const { settlements } = this.props;

        return (
            <div className="map">
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAr6APiRLe-YKCr28cFkLrAzZ9GvakWun0' }}
                        defaultCenter={DEFAULT_CENTER}
                        defaultZoom={DEFAULT_ZOOM}
                    >
                        {settlements && settlements.map(settlement => {
                            return (
                                <MarkerComponent
                                    lat={settlement.position._lat}
                                    lng={settlement.position._long}
                                    text={settlement.title}
                                    key={settlement.id}
                                />
                            );
                        })}
                    </GoogleMapReact>
                </div>
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
)(SettlementMap)