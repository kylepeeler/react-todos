/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';
import { Button } from 'reactstrap';

class LogInButtons extends Component{
    render(){
        return(
            <div>
                <Button color="primary" block={true}>Log In</Button>
                <Button color="secondary" block={true}>Sign Up</Button>
            </div>
        )
    }
}

export default LogInButtons;