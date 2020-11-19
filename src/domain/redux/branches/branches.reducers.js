import branchesConstants from "./branches.constants";

const initialState = {
  branches: [],
  branch: {},
  loading: false,
  errors: "",
};

const branchesReducer = (state = initialState, action) => {
  switch (action.type) {
  case branchesConstants.BRANCH_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  /* GET ITEM */
  case branchesConstants.GET_BRANCHES_SUCCESS:
    return {
      ...state,
      branches: action.payload,
    };

  case branchesConstants.GET_BRANCHES_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* GET ITEM */
  case branchesConstants.GET_BRANCH_SUCCESS:
    return {
      ...state,
      branch: action.payload,
    };

  case branchesConstants.GET_BRANCH_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* CREATE ITEM */
  case branchesConstants.CREATE_BRANCH_SUCCESS:
    return {
      ...state,
    };

  case branchesConstants.CREATE_BRANCH_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* UPDATE ITEM */
  case branchesConstants.UPDATE_BRANCH_SUCCESS:
    return {
      ...state,
    };

  case branchesConstants.UPDATE_BRANCH_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  /* DELETE ITEM */
  case branchesConstants.DELETE_BRANCH_SUCCESS:
    return {
      ...state,
      branch: action.payload,
    };

  case branchesConstants.DELETE_BRANCH_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  default:
    return state;
  }
};

export default branchesReducer;
