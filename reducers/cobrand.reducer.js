import * as actions from "../actions";

export default (cobrand = "", action) => {
  switch (action.type) {
    case actions.TOGGLE_COBRAND:
      return action.payload;
    default:
      return cobrand;
  }
};
