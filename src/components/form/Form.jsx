import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../redux/modules/todos";

const FormContainer = styled.div`
  background-color: #ffff8c;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`;

const InputStyle = styled.input`
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-right: 20px;
`;

const LabelStyle = styled.label`
  margin-right: 20px;
`;
const ButtonStyle = styled.button`
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
      addTodo({
        id: Math.floor(new Date().getTime() + Math.random()),
        title: title.current.value,
        content: content.current.value,
        isDone: false,
      })
    );
    title.current.value = "";
    content.current.value = "";
  };

  return (
    <FormContainer>
      <div>
        <LabelStyle htmlFor="title_input">제목</LabelStyle>
        <InputStyle className="title_input" type="text" ref={title} />
        <LabelStyle htmlFor="content_input">내용</LabelStyle>
        <InputStyle className="content_input" type="text" ref={content} />
      </div>

      <ButtonStyle onClick={addClick}>추가</ButtonStyle>
    </FormContainer>
  );
};
export default Form;
