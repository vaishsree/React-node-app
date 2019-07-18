import axios from "axios";
import { API } from "../actions/types";
import { apiError, apiStart, apiEnd } from "../actions/api";

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    value,
    headers
  } = action.payload;

  if (value) {
    dispatch(apiStart(value));
  }

  axios
    .request({
      url,
      method,
      headers,
      data: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));
    })
    .finally(() => {
      if (value) {
        dispatch(apiEnd(value));
      }
    });
};

export default apiMiddleware;
