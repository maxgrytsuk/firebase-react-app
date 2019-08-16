export const addSettlement = (settlement) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const {latitude, longitude, ...s} = settlement;
    firestore.collection('settlements').add({
      ...s,
      position: new firebase.firestore.GeoPoint(Number(latitude), Number(longitude)),
      profileFirstName: profile.firstName,
      profileLastName: profile.lastName,
      profileId: authorId,
      addedAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_SETTLEMENT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ADD_SETTLEMENT_ERROR' }, err);
    });
  }
};