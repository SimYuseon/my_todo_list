import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { complettodo } from "../../redux/modules/todos";
import { removetodo } from "../../redux/modules/todos";
import { useParams } from "react-router-dom";

const TodoConSt = styled.div`
  display: flex;
`;

const List = () => {
  const todos = useSelector((state) => state.todos.todosList);
  // const { id } = useParams();
  // console.log(id);

  // const completebtn = (id)=>(
  //   dispatch(complettodo(id))
  // )

  return (
    <div>
      <h1>🔥 해야할 일 🔥</h1>

      <TodoConSt>
        {todos
          .filter((todo) => !todo.isDone)
          .map((onetodo) => (
            <Todo onetodo={onetodo} key={onetodo.id} />
          ))}
      </TodoConSt>
      <h1>💛 완료한 일 💛</h1>
      <TodoConSt>
        {todos
          .filter((todo) => todo.isDone)
          .map((onetodo) => (
            <Todo onetodo={onetodo} key={onetodo.id} />
          ))}
      </TodoConSt>
    </div>
  );
};
export default List;
