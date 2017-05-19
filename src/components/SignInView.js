/**
 * Created by Kyle on 5/19/17.
 */
import React, { Component } from 'react';
import AppHeader from './AppHeader';
import SignInForm from './SignInForm';

class SignInView extends Component{
    render(){
        return (
            <div>
                <AppHeader pageTitle="Sign-in"/>
                <br/>
                <div className="container">
                    <SignInForm/>
                </div>
            </div>
        )
    }
}

export default SignInView;