/**
 * Created by Kyle on 5/23/17.
 */
import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';

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
        this.removeCompletedTodos = this.removeCompletedTodos.bind(this);
    }

    addTodo(newTodoTitle){
        if (!newTodoTitle) return;
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
        let todos = this.state.todos;
        todos[key]["done"] = !todos[key]["done"];
        this.setState({
            todos: todos
        });
    }

    removeCompletedTodos(){
        let todos = this.state.todos;
        let uncompletedTodos = [];
        for (let i = 0; i < todos.length; i++){
            if (!todos[i]["done"]){
                uncompletedTodos.push(todos[i]);
            }
        }
        this.setState({
            todos: uncompletedTodos
        })
    }

    render(){
        return(
            <Row>
                <Container>
                    <br/>
                    <TodoAdder addTodo={this.addTodo}/>
                    <br/>
                    {this.state.todos.length !== 0 ?
                        <TodoList todos={this.state.todos} completeTodo={this.completeTodo}/>
                        : <span>No more to-dos! Add a to-do using the form above.<br/></span>
                    }
                    <br/>
                    <Button color="danger" onClick={this.removeCompletedTodos}>Remove all completed to-dos</Button>
                </Container>
            </Row>
        )
    }
}

export default TodoView;