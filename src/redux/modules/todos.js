//action

const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

//action creator

export const addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const complettodo = (payload) => {
  return {
    type: COMPLETE_TODO,
    payload,
  };
};

export const removetodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

// 초기값 지정
const initialState = [
  {
    id: 0,
    title: "오늘의 할 일!",
    content: "상세할 일!",
    isDone: false,
  },
];

//리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; // state에 action.payload({id: 2, title: 'ffff', content: 'ffff', isDone: false})++

    case "COMPLETE_TODO":
      return [console.log(...state, action.payload)];

    default:
      return state;
  }
};
export default todos;
