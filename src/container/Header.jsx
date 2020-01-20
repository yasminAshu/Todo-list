import React  from 'react';
import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 90%;
  padding: 6px 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 8px;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  color: #fff;
  background-color: #6c757d;
  border: none;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 38px;
  margin-left: -4px;
`;

const TodoContainer = styled.div`
    width: 80%;
    margin-left: 10%;
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
`
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:""
        }
    }

    onChange = e => {
        const { value: text } = e.target;
        this.setState({
          text,
        });
      };

      onKeyDown = e => {
        const { value } = e.target;
    
        if (e.which === 13) {
          this.props.addTodo(value);
          this.setState({
            text: '',
          });
          
        }
      };

    render(){
        return (
            <TodoContainer>
                <Label htmlFor = "addTodo">Add Todo</Label>
                <InputContainer>
                <Input  id = "addTodo" type = "text" onChange = {this.onChange} onKeyDown = {this.onKeyDown} />
               <Button onClick = {this.addTodo} >Add Toto </Button>
            </InputContainer>
         </TodoContainer>
        )
    }
}

  export default Header

