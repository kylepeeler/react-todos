/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';

class LogInButtons extends Component{
    render(){
        return(
            <div>
                <Button color="primary" tag={Link} to="/todos" block={true}>Log In</Button>
                <Button color="secondary" block={true}>Sign Up</Button>
            </div>
        )
    }
}

export default LogInButtons;