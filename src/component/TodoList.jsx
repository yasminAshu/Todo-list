import React, { useEffect } from "react";
import { Todo } from "./Todo.jsx";
import styled from "styled-components";

const TodoListContainer = styled.div`
  width: 80%;
  margin-left: 106px;
`;
const UL = styled.ul`
  list-style-type: none;
  padding: 0;
`;

/**
 *
 *@discription - This function is to render
 */
const TodoList = props => {
  useEffect(() => {
    props.getTodos();
  }, []);

  return (
    <TodoListContainer>
      <UL>
        {props.todos &&
          props.todos.map((todo, index) => {
            return <Todo todo={todo} deleteTodo={props.deleteTodo} />;
          })}
      </UL>
    </TodoListContainer>
  );
};
export default TodoList;
