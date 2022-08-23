import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
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
  console.log(typeof [...todolist]);

  const navigate = useNavigate();

  const params = useParams();
  let id = params.id;
  console.log(id);

  const todo = todolist.filter((t) => {
    return t.id === Number(id);
  });
  console.log(typeof todo);
  return (
    <div>
      <Header>
        <p>id:{todo[0].id}</p>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          이전으로
        </BackBtn>
      </Header>
      <h1>{todo[0].title}</h1>
      <p>{todo[0].content}</p>
    </div>
  );
};

export default Detail;
