export const SELECT_MEMBER = "selecedBtn/selectMember";
export const GO_HOME = "selectedBtn/goHome";

export const selectClick = (id) => {
  return {
    type: SELECT_MEMBER,
    id,
  };
};

export const goHomeClick = () => {
  return {
    type: GO_HOME,
  };
};

const initialSate = {
  selectedBtn: null,
};

export const selectedBtnReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return {
        selectedBtn: action.id,
      };
    case GO_HOME:
      return {
        selectedBtn: null,
      };
    default:
      return state;
  }
};
