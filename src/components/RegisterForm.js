/**
 * Created by Kyle on 5/19/17.
 */
/*global _ps*/

import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import PSClickWrap from '../pactsafe-react-sdk/PSClickWrap';

class RegisterForm extends React.Component {

    registerUser() {
        if (!_ps.getByKey("example-click-wrap").allChecked()) {
            alert("You must agree to our Terms & Conditions before registering!");
        } else {
            alert("User agreed to Terms & Conditions!");
        }
        //code to register the user with backend would go here
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name"/>
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email"/>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password"/>
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" placeholder=" Confirm Password"/>
                </FormGroup>

                <PSClickWrap accessId="042fa156-b6a6-4181-abdb-782bad72b3e4" groupKey="terms-and-conditions"
                             signerIDSelector="email" filter="id==1" testMode={true}/>

                <Button color="primary" onClick={this.registerUser}>Register</Button>
                <Button color="link">Return to login</Button>

            </Form>

        )
    }
}

export default RegisterForm;