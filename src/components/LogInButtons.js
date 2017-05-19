/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';

class LogInButtons extends Component{
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block">Log in</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Sign up</button>
            </div>
        )
    }
}

export default LogInButtons;