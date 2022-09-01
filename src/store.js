import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// action creator
export const actionAdd = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const actinoDelete = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = ["hello"], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
