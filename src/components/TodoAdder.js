/**
 * Created by Kyle on 5/23/17.
 */
import React from 'react';
import {Form, InputGroup, Input, Button, InputGroupButton} from 'reactstrap';

class TodoAdder extends React.Component{
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(event){
        event.preventDefault();
        console.log("calling addTodo");
        console.log(this.newTodo);
        this.props.addTodo(this.newTodo.value);
        this.addTodoForm.reset();
    }

    render(){
        return(
            <Form getRef={(input) => this.addTodoForm = input} onSubmit={(e) => this.addTodo(e)}>
                <InputGroup>
                    <Input getRef={(input) => this.newTodo = input} name="newTodoTitle" placeholder="Enter your to-do..."/>
                    <InputGroupButton>
                        <Button type="submit" color="secondary">+</Button>
                    </InputGroupButton>
                </InputGroup>
            </Form>
        )
    }
}

export default TodoAdder;