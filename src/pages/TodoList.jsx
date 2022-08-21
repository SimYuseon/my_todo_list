import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "오늘의 할 일!",
      content: "상세할 일!",
      isDone: false,
    },
  ]);

  return (
    <Layout>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};
export default TodoList;
