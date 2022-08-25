import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTodo, completTodo } from "../../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const TodoBox = styled.div`
  border: 2px solid skyblue;
  border-radius: 15px;
  padding: 20px;
  margin: 0px 20px;
`;

const TitleStyle = styled.h1`
  margin: 0;
`;
const ButtonStyle = styled.button`
  height: 30px;
  border-radius: 10px;
  padding: 0px 30px;
  border: solid 2px ${(props) => props.border};
  background-color: white;
`;

const Todo = ({ onetodo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <TodoBox>
      <p
        onClick={() => {
          navigate("/detail/" + onetodo.id);
          console.log(onetodo.id);
        }}
      >
        상세보기
      </p>
      <TitleStyle>{onetodo.title}</TitleStyle>
      <p>{onetodo.content}</p>
      <ButtonStyle
        border="#ffff8c"
        onClick={() => dispatch(completTodo(onetodo.id))}
      >
        {!onetodo.isDone ? "완료" : "취소"}
      </ButtonStyle>
      <ButtonStyle
        border="#ffdee9"
        onClick={() => dispatch(removeTodo(onetodo.id))}
      >
        삭제
      </ButtonStyle>
    </TodoBox>
  );
};
export default Todo;
