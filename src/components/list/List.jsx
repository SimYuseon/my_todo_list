import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { complettodo } from "../../redux/modules/todos";
import { removetodo } from "../../redux/modules/todos";

const TodoConSt = styled.div`
  display: flex;
`;

const List = ({ todos, setTodos }) => {
  const dispatch = useDispatch();
  const todo_list = useSelector((state) => state.todos);

  const onRemove = (id) => {
    dispatch(
      removetodo(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      )
    );
  };

  // console.log(todo_list[0].isDone);
  const onComplete = (id) => {
    dispatch(
      complettodo(
        todo_list.map((todo) => {
          if (todo.id == id) {
            if (todo.isDone == true) {
              todo.isDone = !todo.isDone;
            } else if (todo.isDone == false) {
              todo.isDone = !todo.isDone;
            }
          }
          return todo;
        })
      )
    );
  };
  const complete_list = useSelector((state) => state.todos);

  return (
    <div>
      <h1>🔥 해야할 일 🔥</h1>

      <TodoConSt>
        {complete_list.map((todo) => {
          if (!todo.isDone) {
            return (
              <div key={todo.id}>
                <Todo todo={todo} onRemove={onRemove} onComplete={onComplete} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </TodoConSt>
      <h1>💛 완료한 일 💛</h1>
      <TodoConSt>
        {todo_list.map((todo) => {
          if (todo.isDone) {
            return (
              <div key={todo.id}>
                <Todo todo={todo} onRemove={onRemove} onComplete={onComplete} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </TodoConSt>
    </div>
  );
};
export default List;
