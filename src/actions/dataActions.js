import { FETCH, FILTER } from "./types";
import axios from "axios";

export const fetchData = () => (dispatch) =>
  axios
    .get(
      `https://emoji-api.com/emojis?access_key=dc6484d1965f280669e79b6acbd037f5cf32e51f`
    )
    .then((response) => {
      dispatch({
        type: FETCH,
        payload: response.data,
      });
    });

export const filterSearch = (event) => (dispatch) =>
  dispatch({
    type: FILTER,
    payload: event,
  });
