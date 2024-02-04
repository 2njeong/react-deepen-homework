export const NICKNAME = "nickname/nickname";
export const RENEW_NICKNAME = "nickname/renewNickname";
export const CONTENT = "content/content";
export const REWNEW_CONTENT = "content/renewContent";
export const TO_WHOM = "option/toWhom";
export const NO_SELECT = "option/noOne";

export const nicknameHandler = (e) => {
  return {
    type: NICKNAME,
    e: e.target.value,
  };
};

export const renewNickname = () => {
  return {
    type: RENEW_NICKNAME,
  };
};

export const contentHandler = (e) => {
  return {
    type: CONTENT,
    e: e.target.value,
  };
};

export const renewContent = () => {
  return {
    type: REWNEW_CONTENT,
  };
};

export const toWhomHandelr = (payload) => {
  return {
    type: TO_WHOM,
    payload,
  };
};

export const selectNoOneHandler = () => {
  return {
    type: NO_SELECT,
  };
};

const initialSate = {
  nickname: "",
  content: "",
  option: "",
};

export const letterReducer = (state = initialSate, action) => {
  switch (action.type) {
    case NICKNAME:
      return {
        ...state,
        nickname: action.e,
      };
    case RENEW_NICKNAME:
      return {
        ...state,
        nickname: "",
      };
    case CONTENT:
      return {
        ...state,
        content: action.e,
      };
    case REWNEW_CONTENT:
      return {
        ...state,
        content: "",
      };
    case TO_WHOM:
      return {
        ...state,
        option: action.payload,
      };
    case NO_SELECT:
      return {
        ...state,
        option: "",
      };
    default:
      return state;
  }
};
