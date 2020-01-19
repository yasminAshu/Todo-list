import React from 'react';
import Header from './Header.jsx'
import TodoList from '../component/TodoList.jsx'
import {addTodo,getTodos,deleteTodo} from '../action'
import { connect } from 'react-redux'
import styled from 'styled-components'

const AppContainer = styled.div`
    display:flex;
    justify-content:center;
    text-align:center;
    width:100%;
   
`;
const TodoContainer = styled.div`
    align-self:center;
    padding:10px;
    margin:10px;
    width:80%;
    height: 400px;  
    box-shadow: 0px 3px 18px -7px rgba(0,0,0,0.68);
    max-height: 500px;
}
`
class TodoApp extends React.Component{
    render(){
        return (
            <AppContainer>
                <TodoContainer>
                <Header addTodo= {this.props.addTodo}/>
                <TodoList getTodos = {this.props.getTodos} 
                    todos= {this.props.todos}
                    deleteTodo = {this.props.deleteTodo}
                />
                </TodoContainer>
            </AppContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
      todos: state.reducer.todos
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => {
        dispatch(addTodo(text))
      },
      getTodos:() => {
        dispatch(getTodos())
      },
      deleteTodo:(id) => {
        dispatch(deleteTodo(id))
      }
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoApp);
