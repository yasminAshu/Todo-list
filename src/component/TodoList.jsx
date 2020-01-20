import React from "react";
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
class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <TodoListContainer>
        <UL>
          {this.props.todos &&
            this.props.todos.map((todo, index) => {
              return <Todo todo={todo} deleteTodo={this.props.deleteTodo} />;
            })}
        </UL>
      </TodoListContainer>
    );
  }
}
export default TodoList;
