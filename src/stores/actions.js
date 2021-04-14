import * as types from "./types";

export const fetchSuccess = (result) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_PRODUCTS_SUCCESS,
      payload: result.products.items,
    });
  };
};

export const fetchFail = (result) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_PRODUCTS_FAIL,
      payload: result,
    });
  };
};

export const fetchDetailSuccess = (result) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_PRODUCTS_DETAIL_SUCCESS,
      payload: result.products.items[0],
    });
  };
};

export const fetchDetailFail = (result) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_PRODUCTS_DETAIL_FAIL,
      payload: result,
    });
  };
};
