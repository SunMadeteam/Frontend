import { GET_STAFF, PAGINATION_STAFF } from "../../const";

const initialState = {
  staff: {
    results: [],
  },
};

export const getStaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF:
      return { ...state, staff: action.payload };
      case PAGINATION_STAFF:
      return { ...state, staff: action.payload };
    default:
      return state;
  }
};
