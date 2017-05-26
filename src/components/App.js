/**
 * Created by Kyle on 5/22/17.
 */
import React from 'react';
import AppHeader from './AppHeader';
import RegisterView from './RegisterView'
import SignInView from './SignInView';
import TodoView from './TodoView';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={()=>(
                        <div>
                            <AppHeader pageTitle="Login"/>
                            <br/>
                            <SignInView/>
                        </div>
                    )}/>
                    <Route path="/register" render={()=>(
                        <div>
                            <AppHeader pageTitle="Register"/>
                            <br/>
                            <RegisterView/>
                        </div>
                    )}/>
                    <Route path="/todos" render={()=>(
                        <div>
                            <AppHeader pageTitle="Your To-dos"/>
                            <TodoView/>
                        </div>
                    )}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;