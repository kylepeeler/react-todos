/**
 * Created by Kyle on 5/19/17.
 */
import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

import AppHeader from './AppHeader';
import SignInForm from './SignInForm';

class SignInView extends Component{
    render(){
        return (
            <Row>
                <Container>
                    <SignInForm/>
                </Container>
            </Row>
        )
    }
}

export default SignInView;