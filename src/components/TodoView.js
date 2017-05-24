/**
 * Created by Kyle on 5/23/17.
 */
import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';
import Todo from "./Todo";

class TodoView extends React.Component{
    constructor(props){
        const BASETODOS = [
            {
                "name": "Todo1", "done": true
            },
            {
                "name": "Todo2", "done": false
            },
            {
                "name": "Test todo3", "done": false
            },
            {
                "name": "Todo4", "done":true
            }
        ];
        super(props);
        this.state = {
            todos: BASETODOS
        };
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }

    addTodo(newTodoTitle){
        const newTodo = [
            {
                "name": newTodoTitle, "done": false
            }
        ];

        const todos = this.state.todos.concat(newTodo);
        this.setState({
            todos
        });
    }

    completeTodo(key){
        let todos = {...this.state.todos};
        todos[key]["done"] = !todos[key]["done"];
        this.setState({
            todos
        });
    }

    render(){
        return(
            <Row>
                <Container>
                    <br/>
                    <TodoAdder addTodo={this.addTodo}/>
                    <br/>
                    <TodoList todos={this.state.todos} completeTodo={this.completeTodo}/>
                    <br/>
                    <Button color="danger">Remove all completed to-dos</Button>
                </Container>
            </Row>
        )
    }
}

export default TodoView;