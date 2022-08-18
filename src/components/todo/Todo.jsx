import React from "react";
import "./style.css";

const Todo = ({ input, onRemove, onComplete }) => {
  return (
    <div>
      <div className="todobox">
        <h1>{input.title}</h1>
        <p>{input.contents}</p>
        <button
          className="complete_btn"
          onClick={() => {
            onComplete(input.id);
          }}
        >
          {input.isDone == false ? "완료" : "취소"}
        </button>
        <button
          className="cancel_btn"
          onClick={() => {
            onRemove(input.id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};
export default Todo;
