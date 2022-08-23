import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
      {todolist.filter((t) => {
        if (t.id === Number(id))
          return (
            <div>
              <Header>
                <p>id:{t.id}</p>
                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  이전으로
                </button>
              </Header>
              <h1>{t.title}</h1>
              <p>{t.content}</p>
            </div>
          );
        console.log(t.content);
      })}
    </div>
  );
};

export default Detail;
