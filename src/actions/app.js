/* eslint-disable no-unused-vars */
import { push } from 'react-router-redux'
import axios from 'axios'
import constants from './constants'


const CorsUrl = 'https://cors-anywhere.herokuapp.com/';

export const loadContents = (callback) => async (dispatch) => {  
  const { data } = await axios.get(`${CorsUrl}https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a?`);
  dispatch({ type: constants.LOAD_CONTENTS, data: data });
  callback(data, CorsUrl);
}

export const loadContentDetails = (payload, callback) => async (dispatch, getState) => {
  const data  = await axios.get(`${CorsUrl}https://mychannel.nunchee.tv/api/assets/images/view/${payload.id}?type=${payload.type}`);
  dispatch({ type: constants.LOAD_CONTENTS, data: data });
  callback(data);
}



// export const loadContentDetails = () => async (dispatch, getState) => {
//   dispatch({ type: constants.RESET_APP })
//   await dispatch(push('/'))
//   dispatch({ type: constants.TOGGLE_TRANSITIONS })
// }