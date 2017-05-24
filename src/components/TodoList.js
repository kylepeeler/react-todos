/**
 * Created by Kyle on 5/23/17.
 */
import React, {Component} from 'react';
import {ListGroup} from 'reactstrap';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key){
        this.props.completeTodo(key);
    }

    render(){
        return(
            <ListGroup>
                {
                    Object.keys(this.props.todos).map(key=>
                        <Todo title={this.props.todos[key].name} key={key} isDone={this.props.todos[key].done} onClick={(e) => this.handleClick(key)}/>
                    )
                }
            </ListGroup>
        )
    }
}

export default TodoList;