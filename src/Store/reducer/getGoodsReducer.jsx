import { GET_GOODS, GET_PRODUCT, PAGINATION_GOODS } from "../../const";

const initialState = {
  goods: {
    results: [],
  },
  product:{
    results:[],
  },
};

export const getGoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      return { ...state, goods: action.payload };
    case GET_PRODUCT:
      return { ...state, product:action.payload };
      case PAGINATION_GOODS:
      return { ...state, goods:action.payload };
    default:
      return state;
  }
};
