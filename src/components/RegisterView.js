/**
 * Created by Kyle on 5/19/17.
 */
import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import AppHeader from './AppHeader';
import RegisterForm from './RegisterForm';

class RegisterView extends Component{
    render(){
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