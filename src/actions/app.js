/* eslint-disable no-unused-vars */
import axios from 'axios'
import constants from './constants'


const corsURL = 'https://cors-anywhere.herokuapp.com/';

export const loadContents = (callback) => async (dispatch) => {  
  const { data } = await axios.get(`${corsURL}https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a?`);
  dispatch({ type: constants.LOAD_CONTENTS, data: data });
  callback(data, corsURL);
}

export const loadContentDetails = (id, callback) => async (dispatch, getState) => {
  const { data }  = await axios.get(`${corsURL}https://mychannel.nunchee.tv/api/ott/contents/details/${id}`);
  dispatch({ type: constants.LOAD_CONTENTS_DETAIL, data: data.data });
  callback(data.data, corsURL);
}
