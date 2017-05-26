/**
 * Created by Kyle on 5/19/17.
 */
import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import LogInButtons from './LogInButtons';

class SignInForm extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email"/>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password"/>
                </FormGroup>
                <LogInButtons/>
            </Form>

        )
    }
}

export default SignInForm;