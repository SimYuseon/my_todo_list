//action

const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

//action creator

export const addtodo = (newtodo) => {
  return {
    type: ADD_TODO,
    newtodo,
  };
};

export const complettodo = (id) => {
  return {
    type: COMPLETE_TODO,
    id,
  };
};

export const removetodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

// 초기값 지정
const initialState = {
  todosList: [
    {
      id: 0,
      title: "오늘의 할 일!",
      content: "상세할 일!",
      isDone: false,
    },
    {
      id: 1,
      title: "밥먹기",
      content: "카레냠!",
      isDone: false,
    },
  ],
};

//리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todosList: [...state.todosList, action.newtodo] }; // state에 action.payload({id: 2, title: 'ffff', content: 'ffff', isDone: false})++

    case "COMPLETE_TODO":
      const newTodoList = state.todosList.map((todo) => {
        return todo.id == action.id ? { ...todo, isDone: !todo.isDone } : todo;
      });
      return { todosList: newTodoList };

    case "REMOVE_TODO":
      return {
        todosList: [...state.todosList.filter((todo) => todo.id !== action.id)],
      };

    default:
      return state;
  }
};
export default todos;
