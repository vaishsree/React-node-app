import { SET_STOCK_DETAILS, API, FETCH_STOCK_DETAILS } from "./types";

export function fetchStockDetails() {
  return apiAction({
    url: "https://join.reckon.com/stock-pricing",
    onSuccess: setStockDetails,
    onFailure: () => console.log("Error occured loading stocks"),
    value: FETCH_STOCK_DETAILS
  });
}

function setStockDetails(data) {
  return {
    type: SET_STOCK_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  value = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      value,
      headersOverride
    }
  };
}
