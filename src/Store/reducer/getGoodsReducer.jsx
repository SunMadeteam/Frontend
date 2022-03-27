import { GET_GOODS, GET_PRODUCT, PAGINATION_GOODS, DELETE_PRODUCT, GET_CATEGORY, GET_CATEGORY_BY_ID } from "../../const";

const initialState = {
  goods: {
    results: [],
  },
  product: {
    results: [],
  },
  category:{

  }

};

export const getGoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      return { ...state, goods: action.payload };
    case GET_PRODUCT:
      return { ...state, product: action.payload };
    case PAGINATION_GOODS:
      return { ...state, goods: action.payload };
    case DELETE_PRODUCT:
      return { ...state,};
    case GET_CATEGORY:
      return { ...state, category:action.payload };
    case GET_CATEGORY_BY_ID:
        return { ...state, goods:action.payload };
    default:
      return state;
  }
};
