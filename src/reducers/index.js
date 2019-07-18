import {
  SET_STOCK_DETAILS,
  API_START,
  API_END,
  FETCH_STOCK_DETAILS
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_STOCK_DETAILS:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_STOCK_DETAILS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_STOCK_DETAILS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
