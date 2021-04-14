import * as types from "./types";

const initialState = {
  errorMessage: null,
  data: [],
  detail: [],
};

export default function productsReducer(productsState = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...productsState,
        data: action.payload,
      };
    case types.FETCH_PRODUCTS_FAIL:
      return {
        ...productsState,
        errorMessage: action.payload,
      };
    case types.FETCH_PRODUCTS_DETAIL_SUCCESS:
      return {
        ...productsState,
        detail: action.payload,
      };
    case types.FETCH_PRODUCTS_DETAIL_FAIL:
      return {
        ...productsState,
        errorMessage: action.payload,
      };
    default:
      return productsState;
  }
}
