/**
 * Created by Kyle on 5/19/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';


class LogInButtons extends React.Component {
    render() {
        return (
            <div>
                <Button color="primary" tag={Link} to="/todos" block={true}>Log In</Button>
                <Button color="secondary" tag={Link} to="/register" block={true}>Sign Up</Button>
            </div>
        )
    }
}

export default LogInButtons;