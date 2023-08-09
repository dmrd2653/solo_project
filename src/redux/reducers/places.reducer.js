const places = (state = [], action) => {
    switch (action.type) {
      case 'SET_PLACES':
        return action.payload;
        default:
          return state;
    }
  }

  export default places;