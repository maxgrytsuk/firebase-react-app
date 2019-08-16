const initState = {
  settlements: []
}

const settlementReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_SETTLEMENT_SUCCESS':
      console.log('add settlement success');
      return state;
    case 'ADD_SETTLEMENT_ERROR':
      console.log('add settlement error');
      return state;
    default:
      return state;
  }
};

export default settlementReducer;