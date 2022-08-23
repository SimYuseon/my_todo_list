import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removetodo, complettodo } from "../../redux/modules/todos";
import { useNavigate } from "react-router-dom";

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

const Todo = ({ onetodo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <TodoBox>
      <p
        onClick={() => {
          navigate("/Detail/" + onetodo.id);
          console.log(onetodo.id);
        }}
      >
        상세보기
      </p>
      <H1St>{onetodo.title}</H1St>
      <p>{onetodo.content}</p>
      <BtnSt border="#ffff8c" onClick={() => dispatch(complettodo(onetodo.id))}>
        {!onetodo.isDone ? "완료" : "취소"}
      </BtnSt>
      <BtnSt border="#ffdee9" onClick={() => dispatch(removetodo(onetodo.id))}>
        삭제
      </BtnSt>
    </TodoBox>
  );
};
export default Todo;
