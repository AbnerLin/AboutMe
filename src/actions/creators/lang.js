import { SET_LANG } from '../index';

class Lang {

  setLang(language) {
    return {
      type: SET_LANG,
      language
    };
  }

}

export default Lang;
