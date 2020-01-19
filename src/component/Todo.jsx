import React from "react";
import styled from "styled-components";

const LI = styled.li`
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
  position: relative;
  text-align: left;
`;

const CloseSpan = styled.span`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
  &:hover {
    background: #bbb;
  }
`;
export const Todo = props => {
  return (
    <>
      <LI>
        {props.todo.name}
        <CloseSpan onClick={() => props.deleteTodo(props.todo.id)}>&times;</CloseSpan>
      </LI>
    </>
  );
};
