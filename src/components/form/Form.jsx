import React, { useDebugValue } from "react";
import { useRef } from "react";
import "./style.css";

const Form = ({ inputs, setInputs }) => {
  const onClickHandler = () => {
    setInputs([
      ...inputs,
      {
        id: inputs.length + 1,
        title: title.current.value,
        contents: contents.current.value,
        isDone: false,
      },
    ]);
    title.current.value = "";
    contents.current.value = "";
  };

  const title = useRef(null);
  const contents = useRef(null);
  return (
    <div className="form_container">
      <div className="input_container">
        <label htmlFor="title_input">제목</label>
        <input className="title_input" type="text" ref={title} />
        <label htmlFor="contents_input">내용</label>
        <input className="contents_input" type="text" ref={contents} />
      </div>

      <button className="add_btn" onClick={onClickHandler}>
        추가
      </button>
    </div>
  );
};
export default Form;
