import { combineReducers } from "redux";

const places = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLACES':
      return action.payload;
        default:
          return state;
    }
  }

const thisPlace = (state = [], action) => {
  switch (action.type) {
      case 'SET_INFO':
        return action.payload;
      default:
        return state;
    }
}


  export default combineReducers({
    places, 
    thisPlace
  });