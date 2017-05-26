/**
 * Created by Kyle on 5/19/17.
 */
import React from 'react';
import {Container, Row} from 'reactstrap';
import SignInForm from './SignInForm';

class SignInView extends React.Component {
    render() {
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