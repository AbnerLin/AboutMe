import { SET_LANG } from '../actions';

const initialState = {
  language: 'zh-tw'
};

const lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return Object.assign(state, {
        language: action.language
      });
    default:
      return state
  }
};

export default lang;
