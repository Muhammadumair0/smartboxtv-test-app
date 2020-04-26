import constants from '../actions/constants'

const initialState = {
  initialized: false,
  transitions: true,
  counter: 0,
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INIT_APP:
      return {
        ...state,
        initialized: true,
      }

    case constants.RESET_APP:
      return {
        ...initialState,
        transitions: false,
      }

    case constants.INCREMENT_COUNTER:
      if(!initialState[`counter-`+action.data]) {
        initialState[`counter-`+action.data] = 1;
        state[`counter-`+action.data] = 0;
      }
      state[`counter-`+action.data] = Number(state[`counter-`+action.data]) + 1;
      return {
        ...state,
        [`counter-`+action.data]: (state[`counter-`+action.data]).toString(),
      }

    case constants.DECREMENT_COUNTER:
      if(!initialState[`counter-`+action.data]) {
        initialState[`counter-`+action.data] = -1;
        state[`counter-`+action.data] = 0;
      }
      state[`counter-`+action.data] = Number(state[`counter-`+action.data]) - 1;
      return {
        ...state,
        [`counter-`+action.data]: (state[`counter-`+action.data]).toString(),
      }

    case constants.LOAD_CONTENTS_DETAIL:
      return {
        ...state,
        [`content-${action.data._id}`]: action.data,
      }

    case constants.LOAD_CONTENTS:
      return {
        ...state,
        contents: action.data,
      }

    default:
      return state
  }
}
