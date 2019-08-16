export const addSettlement = (settlement) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('settlements').add({
      ...settlement,
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