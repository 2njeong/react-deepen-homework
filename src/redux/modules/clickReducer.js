const CLICK_CHANGE_TRUE = "click/clickChangeTrue";
const CLICK_CHANGE_FALSE = "click/clickChangeFalse";

export const clickChangeTrue = () => {
  return {
    type: CLICK_CHANGE_TRUE,
  };
};

export const clickChangeFalse = () => {
  return {
    type: CLICK_CHANGE_FALSE,
  };
};

export const initialSate = {
  click: false,
};

export const clickReducer = (state = initialSate, action) => {
  switch (action.type) {
    case CLICK_CHANGE_TRUE:
      return {
        click: true,
      };
    case CLICK_CHANGE_FALSE:
      return {
        click: false,
      };
    default:
      return state;
  }
};
