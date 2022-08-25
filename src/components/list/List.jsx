import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TodoContainerStyle = styled.div`
  display: flex;
`;

const List = () => {
  const todos = useSelector((state) => state.todos.todosList);

  return (
    <div>
      <h1>🔥 해야할 일 🔥</h1>
      <TodoContainerStyle>
        {todos
          .filter((todo) => !todo.isDone)
          .map((onetodo) => (
            <div key={onetodo.id}>
              <Todo onetodo={onetodo} />
            </div>
          ))}
      </TodoContainerStyle>
      <h1>💛 완료한 일 💛</h1>
      <TodoContainerStyle>
        {todos
          .filter((todo) => todo.isDone)
          .map((onetodo) => (
            <div key={onetodo.id}>
              <Todo onetodo={onetodo} />
            </div>
          ))}
      </TodoContainerStyle>
    </div>
  );
};
export default List;
