import { GET_COMPANIES } from "./types";
import { ADD_COMPANY } from "./types";
import { EDIT_COMPANY } from "./types";

import axios from "axios";

export const getCompanies = () => async dispatch => {
  const res = await axios.get(
    process.env.REACT_APP_root_dir + "/json/companies.json"
  );
  dispatch({
    type: GET_COMPANIES,
    payload: res.data
  });
};

export const editCompany = id => async dispatch => {
  const res = await axios.get(
    process.env.REACT_APP_root_dir + `/json/company.json?cs_comp_code=${id}`
  );
  dispatch({
    type: EDIT_COMPANY,
    payload: res.data
  });
};

export const addCompany = () => async dispatch => {
  const res = await axios.get(
    process.env.REACT_APP_root_dir + "/json/company.json"
  );
  dispatch({
    type: ADD_COMPANY,
    payload: res.data
  });
};
