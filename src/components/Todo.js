/**
 * Created by Kyle on 5/23/17.
 */
import React from 'react'
import {ListGroupItem, Input} from 'reactstrap';
import './Todo.css'

class Todo extends React.Component{
    render(){
        const isDone = this.props.isDone;
        return(
            <ListGroupItem tag="li" onClick={this.props.onClick}>
                <Input addon type="checkbox" aria-label="Checkbox for todo item" checked={isDone ? "checked" : "" } readOnly/>
                &nbsp;&nbsp;
                <span className={isDone ? "done" : ""}>{this.props.title}</span>
            </ListGroupItem>
        )
    }
}

export default Todo;