import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Detail = () => {
  const todolist = useSelector((state) => state.todos);
  console.log(todolist);
  const navigate = Navigate();
  const params = useParams();
  let id = params.id;
  return (
    <div>
      {todolist.filter((pro) => {
        if (pro.id == Number(id))
          return (
            <div>
              <Header>
                <p>id:{pro.id}</p>
                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  이전으로
                </button>
              </Header>
              <h1>{pro.title}</h1>
              <p>{pro.content}</p>
            </div>
          );
      })}
    </div>
  );
};

export default Detail;
