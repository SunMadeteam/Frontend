import {
  GET_BRANCH,
  GET_ONE_STAFF,
  GET_SALARY,
  GET_STAFF,
  IS_ACTIVE,
  PAGINATION_STAFF,
} from "../../const";

const initialState = {
  staff: {
    results: [],
  },
  oneStaff: {
    results: [],
  },
  branch: {
    results:[]
  },
  salary: {
    results: [],
  },
};

export const getStaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF:
      return { ...state, staff: action.payload };
    case PAGINATION_STAFF:
      return { ...state, staff: action.payload };
    case GET_ONE_STAFF:
      return { ...state, oneStaff: action.payload };
    case GET_BRANCH:
      return { ...state, branch: action.payload };
    case IS_ACTIVE:
      return { ...state, staff: action.payload };
    case GET_SALARY:
      return { ...state, salary: action.payload };
    default:
      return state;
  }
};
