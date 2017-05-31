/**
 * Created by Kyle on 5/19/17.
 */
/*global _ps*/

import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import PSClickWrap from '../pactsafe-react-sdk/PSClickWrap';

class RegisterForm extends React.Component {

    registerUser() {
        // ALL client-side validation would go here
        // validate();

        // Add a trigger to check status of PactSafe being checked
        if(_ps.getByKey("terms-and-conditions").allChecked()){
            console.log("Thanks for agreeing!");
            //register the user
        } else {
            // do something if the user doesn't check all the boxes
            console.log("Agree to our terms. Kthx!");
        }
        //code to register the user with backend would go here
    }

    render() {
        const data2render = {
            vendor_name: "Kyle Peeler",
            vendor_phone: "3178693251",
            vendor_price: "$9000.00"
        };

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

                <PSClickWrap accessId="042fa156-b6a6-4181-abdb-782bad72b3e4" groupKey="terms-and-conditions" clickWrapStyle="checkbox"
                             signerIDSelector="email" testMode={true} dynamic={false} containerSelector="test1"/>

                {/*<PSClickWrap accessId="042fa156-b6a6-4181-abdb-782bad72b3e4" groupKey="test-dynamic-group" clickWrapStyle="scroll"*/}
                             {/*signerIDSelector="email" testMode={true} dynamic={true} renderData={data2render}/>*/}

                <Button color="primary" onClick={this.registerUser}>Register</Button>
                <Button color="link">Return to login</Button>

            </Form>

        )
    }
}

export default RegisterForm;