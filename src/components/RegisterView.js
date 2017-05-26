/**
 * Created by Kyle on 5/19/17.
 */
import React from 'react';
import {Row} from 'reactstrap';
import RegisterForm from './RegisterForm';

class RegisterView extends React.Component {
    render() {
        return (
            <Row>
                <div className="container">
                    <RegisterForm/>
                </div>
            </Row>
        )
    }
}

export default RegisterView;