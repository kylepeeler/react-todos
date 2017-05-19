/**
 * Created by Kyle on 5/19/17.
 */
import React, { Component } from 'react';
import AppHeader from './AppHeader';
import RegisterForm from './RegisterForm';

class RegisterView extends Component{
    render(){
        return (
            <div>
                <AppHeader pageTitle="Registration"/>
                <br/>
                <div className="container">
                    <RegisterForm/>
                </div>
            </div>
        )
    }
}

export default RegisterView;