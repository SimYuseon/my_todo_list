import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackBtn = styled.button`
  background-color: skyblue;
  border-radius: 15px;
  padding: 10px 20px;
  border: none;
`;

const Detail = () => {
  const todolist = useSelector((state) => state.todos.todosList);
  const navigate = useNavigate();
  const params = useParams();
  let id = params.id;
  const todo = todolist.findIndex((t) => {
    return t.id === Number(id);
  });
  return (
    <div>
      <Header>
        <p>id:{todolist[todo].id}</p>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          이전으로
        </BackBtn>
      </Header>
      <h1>{todolist[todo].title}</h1>
      <p>{todolist[todo].content}</p>
    </div>
  );
};

export default Detail;
