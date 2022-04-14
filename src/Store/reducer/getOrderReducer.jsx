import { DELETE_ORDER, GET_ORDER, GET_ORDER_BY_ID, GET_ORDER_DETAIL, PAGINATION_ORDER } from "../../const";

const initialState = {
  order: {
    results: [],
  },
  getOrder:{
    results:[]
  },
  orderDetail:{

  },
  loading:false
};

export const getOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return { ...state, order: action.payload };
    case PAGINATION_ORDER:
      return { ...state, order: action.payload };
    case DELETE_ORDER:
      return {
        ...state,
        order: {
          results: state.order.results.filter(
            (element) => action.payload !== element.id
          ),
        },
      };
      case GET_ORDER_BY_ID:
        return { ...state, getOrder: action.payload };
      case GET_ORDER_DETAIL:
        return { ...state, orderDetail: action.payload };
    default:
      return state;
  }
};
