import { SET_LANG } from '../actions';

const initialState = {
  lang: 'zh-tw'
};

const lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return Object.assign({}, {
        lang: action.language
      });
    default:
      return state
  }
};

export default lang;
