import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../redux/modules/todos";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [inputs, setInputs] = useState({ title: "", content: "" });
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const { title, content } = inputs;

  const inputChange = (e) => {
    console.log(inputs.title.length);
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
    if (inputs.title !== null && content.title !== null) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {}, [disabled]);

  const addTodoClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        title: inputs.title,
        content: inputs.content,
        isDone: false,
      })
    );
    setInputs({ title: "", content: "" });
  };

  return (
    <FormContainer>
      <div>
        <LabelStyle htmlFor="title">제목</LabelStyle>
        <InputStyle
          name="title"
          className="title"
          type="text"
          onChange={inputChange}
          value={title}
        />
        <LabelStyle htmlFor="content">내용</LabelStyle>
        <InputStyle
          name="content"
          className="content"
          type="text"
          onChange={inputChange}
          value={content}
        />
      </div>

      <ButtonStyle onClick={addTodoClick} disabled={disabled}>
        추가하기
      </ButtonStyle>
    </FormContainer>
  );
};
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
export default Form;
