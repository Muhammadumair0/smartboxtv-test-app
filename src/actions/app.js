/* eslint-disable no-unused-vars */
import axios from 'axios'
import constants from './constants'


const corsURL = process.env.REACT_APP_CORS_URL;

export const loadContents = (callback) => async (dispatch, getState) => {  
  const { data } = await axios.get(`${corsURL}https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a?`);
  dispatch({ type: constants.LOAD_CONTENTS, data: data });
  callback(getState(), corsURL);
}

export const loadContentDetails = (id, callback) => async (dispatch, getState) => {
  const { data }  = await axios.get(`${corsURL}https://mychannel.nunchee.tv/api/ott/contents/details/${id}`);
  dispatch({ type: constants.LOAD_CONTENTS_DETAIL, data: data.data });
  callback(getState(), corsURL);
}


export const increamentCounter = (id, callback) => async (dispatch, getState) => {  
  dispatch({ type: constants.INCREMENT_COUNTER, data: id });
  callback(getState())
}

export const decreamentCounter = (id, callback) => async (dispatch, getState) => {  
  dispatch({ type: constants.DECREMENT_COUNTER, data: id });
  callback(getState())
}