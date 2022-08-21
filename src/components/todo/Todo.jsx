import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TodoBox = styled.div`
  border: 2px solid skyblue;
  border-radius: 15px;
  padding: 20px;
  margin: 0px 20px;
`;

const H1St = styled.h1`
  margin: 0;
`;
const BtnSt = styled.button`
  height: 30px;
  border-radius: 10px;
  padding: 0px 30px;
  border: solid 2px ${(props) => props.border};
  background-color: white;
`;

const Todo = ({ todo, onRemove, onComplete }) => {
  return (
    <TodoBox>
      <H1St>{todo.title}</H1St>
      <p>{todo.content}</p>
      <BtnSt
        border="#ffdee9"
        onClick={() => {
          onComplete(todo.id);
        }}
      >
        {!todo.isDone ? "완료" : "취소"}
      </BtnSt>
      <BtnSt
        border="#ffff8c"
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        삭제
      </BtnSt>
    </TodoBox>
  );
};
export default Todo;
