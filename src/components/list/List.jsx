import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = ({ inputs, setInputs }) => {
  const onRemove = (id) => {
    setInputs(
      inputs.filter((v) => {
        return v.id !== id;
      })
    );
  };

  const onComplete = (id) => {
    setInputs(
      inputs.map((v) => {
        if (v.id == id) {
          if (v.isDone == true) {
            v.isDone = !v.isDone;
          } else if (v.isDone == false) {
            v.isDone = !v.isDone;
          }
        }
        return v;
      })
    );
  };
  return (
    <div>
      <h1>할일</h1>
      <div className="todo_container">
        {inputs.map((v) => {
          if (!v.isDone) {
            return (
              <div key={v.id}>
                <Todo input={v} onRemove={onRemove} onComplete={onComplete} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1>한일</h1>
      <div className="todo_container">
        {inputs.map((v) => {
          if (v.isDone) {
            return (
              <div key={v.id}>
                <Todo input={v} onRemove={onRemove} onComplete={onComplete} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export default List;
