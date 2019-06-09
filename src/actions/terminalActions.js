import axios from "axios";

import { GET_TERMINALS, GET_TERMINAL_TYPES } from "./types";
import { ADD_TERMINAL } from "./types";
import { EDIT_TERMINAL } from "./types";

export const getTerminals = () => async dispatch => {
  const res = await axios.get("json/terminals.json");
  dispatch({
    type: GET_TERMINALS,
    payload: res.data
  });
};

export const getTerminalTypes = () => async dispatch => {
  const res = await axios.get("/json/terminal_types.json");
  dispatch({
    type: GET_TERMINAL_TYPES,
    payload: res.data
  });
};

export const editTerminal = id => async dispatch => {
  const res = await axios.get(`/json/terminal.json?ref=${id}`);
  dispatch({
    type: EDIT_TERMINAL,
    payload: res.data
  });
};

export const addTerminal = () => async dispatch => {
  const res = await axios.get("/json/newterminal.json");
  dispatch({
    type: ADD_TERMINAL,
    payload: res.data
  });
};
