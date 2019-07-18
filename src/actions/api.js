import { API_START, API_END, ACCESS_DENIED, API_ERROR } from "../actions/types";

export const apiStart = value => ({
  type: API_START,
  payload: value
});

export const apiEnd = value => ({
  type: API_END,
  payload: value
});

export const apiError = error => ({
  type: API_ERROR,
  error
});
