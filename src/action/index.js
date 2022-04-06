import reduxType from "../config/reduxType";
import api from "../api";

export const fetchAllBook = () => async (dispatch) => {
  const res = await api.get("/books");
  dispatch({ type: reduxType.FETCH_SEARCH_BOOK, payload: res.data });
};












