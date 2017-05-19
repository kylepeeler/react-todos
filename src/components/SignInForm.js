/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';
import FormInput from './FormInput';
import LogInButtons from './LogInButtons';

class SignInForm extends Component{
    render(){
        return(
            <form>
                <FormInput label="Email" type="email"/>
                <FormInput label="Password" type="password"/>
                <LogInButtons/>
            </form>

        )
    }
}

export default SignInForm;