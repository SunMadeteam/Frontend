import {
  CHANGE_INPUT_ADRESS,
  DELETE_BRANCH,
  GET_BRANCH,
  GET_BRANCH_BY_ID,
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
    results: [],
  },
  salary: {
    results: [],
  },
  getBranch: {},
  loading: false,
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
      return { ...state, salary: action.payload, loading: true };
    case DELETE_BRANCH:
      return {
        ...state,
        branch: {
          results: state.branch.results.filter(
            (element) => action.payload !== element.id
          ),
        },
      };
    case GET_BRANCH_BY_ID:
      return {
        ...state,
        getBranch: action.payload,
      };
    case CHANGE_INPUT_ADRESS:
      return {
        ...state,
        getBranch: {
          ...state.getBranch, adress:action.payload
        },
      };
    default:
      return state;
  }
};
