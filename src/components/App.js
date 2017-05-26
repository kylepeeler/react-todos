/**
 * Created by Kyle on 5/22/17.
 */
import React from 'react';
import AppHeader from './AppHeader';
import RegisterView from './RegisterView'
import SignInView from './SignInView';
import TodoView from './TodoView';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <div>
                            <AppHeader pageTitle="Login" {...props}/>
                            <br/>
                            <SignInView/>
                        </div>
                    )}/>
                    <Route path="/register" render={(props) => (
                        <div>
                            <AppHeader pageTitle="Register" {...props}/>
                            <br/>
                            <RegisterView/>
                            <br/>
                        </div>
                    )}/>
                    <Route path="/todos" render={(props) => (
                        <div>
                            <AppHeader pageTitle="Your To-dos" {...props}/>
                            <TodoView/>
                        </div>
                    )}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;