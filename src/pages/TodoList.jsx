import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
  // input창 두개를 관리 하기 위해 name속성을 준 후 객체를 사용
  const [inputs, setInputs] = useState([
    { id: 0, title: "몽이밥주기", contents: "몽몽몽몽!", isDone: false },
    { id: 1, title: "냥이밥먹기", contents: "냥냥냥냥!", isDone: false },
  ]);

  return (
    <Layout>
      <Form inputs={inputs} setInputs={setInputs} />
      <List inputs={inputs} setInputs={setInputs} />
    </Layout>
  );
};
export default TodoList;
