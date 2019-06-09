import {
  GET_TERMINALS,
  EDIT_TERMINAL,
  GET_TERMINAL_TYPES,
  ADD_TERMINAL
} from "./../actions/types";

import axios from "axios";

const initialState = {
  terminals: [],
  terminal: {},
  terminal_types: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TERMINALS:
      return {
        ...state,
        terminals: action.payload
      };
    case EDIT_TERMINAL:
      return {
        ...state,
        terminal: action.payload
      };
    case ADD_TERMINAL:
      return {
        ...state,
        terminal: action.payload
      };
    case GET_TERMINAL_TYPES:
      return {
        ...state,
        terminal_types: action.payload
      };
    default:
      return state;
  }
}
