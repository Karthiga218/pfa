import { GET_COMPANIES, EDIT_COMPANY } from "./../actions/types";

const initialState = {
  companies: [""],
  company: {},
  showList: true,
  showDetail: false
};

export default function(state = initialState, action) {
  console.log("called with state=" + state + ":" + action.type);
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload.items
      };
    case EDIT_COMPANY:
      return {
        ...state,
        company: action.payload
      };
    default:
      return state;
  }
}
