/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';
import FormInput from './FormInput';

class RegisterForm extends Component{
    render(){
        return(
            <form>
                <FormInput label="First Name" name="firstName"/>
                <FormInput label="Last Name" name="lastName"/>
                <FormInput label="Email" type="email" name="email"/>
                <FormInput label="Password" type="password" name="password"/>
                <button type="button" className="btn btn-primary btn-lg btn-block">Register</button>
            </form>

        )
    }
}

export default RegisterForm;