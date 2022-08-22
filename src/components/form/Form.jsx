import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { addtodo } from "../../redux/modules/todos";

const FormSt = styled.div`
  background-color: #ffff8c;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`;

const InputSt = styled.input`
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-right: 20px;
`;

const LabelSt = styled.label`
  margin-right: 20px;
`;
const BtnSt = styled.button`
  background-color: #ffdee9;
  height: 30px;
  border-radius: 10px;
  padding: 0px 40px;
  border: none;
`;

const Form = () => {
  const title = useRef(null);
  const content = useRef(null);

  const dispatch = useDispatch();

  const addClick = () => {
    dispatch(
      addtodo({
        id: new Date().getTime() + Math.random(),
        title: title.current.value,
        content: content.current.value,
        isDone: false,
      })
    );
    title.current.value = "";
    content.current.value = "";
  };

  return (
    <FormSt>
      <div>
        <LabelSt htmlFor="title_input">제목</LabelSt>
        <InputSt className="title_input" type="text" ref={title} />
        <LabelSt htmlFor="content_input">내용</LabelSt>
        <InputSt className="content_input" type="text" ref={content} />
      </div>

      <BtnSt onClick={addClick}>추가</BtnSt>
    </FormSt>
  );
};
export default Form;
