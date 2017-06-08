/**
 * Created by Kyle on 5/19/17.
 */
/*global _ps*/

import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import {PSClickWrap, PSBrowseWrap} from 'pactsafe-react-sdk';

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

                <PSClickWrap accessId={'29ea80d9-d386-4cfd-a280-505e802ee732'} signerIDSelector={'email'} groupKey={'example-clickwrap'} displayAll={true} forceScroll={true} clickWrapStyle={'scroll'}/>


                <Button color="primary" onClick={this.registerUser}>Register</Button>
                <Button color="link" tag={Link} to="/login">Return to login</Button>
                {/*<PSBrowseWrap psScriptURL={'https://127.0.0.1:8081/ps.js'} accessId={'042fa156-b6a6-4181-abdb-782bad72b3e4'} groupKey="test-browsewrap" linkText="Legal Center" position={'right'} openLegalCenter={true}/>*/}


            </Form>

        )
    }
}

export default RegisterForm;