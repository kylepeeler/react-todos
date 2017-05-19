/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';
import logo from '../logo.svg';
import './AppHeader.css';

class AppHeader extends Component{
    render(){
        return(
            <div className="App-header-wrapper container-fluid">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Example App</h2>
                    <h5>{this.props.pageTitle}</h5>
                </div>
            </div>

        );
    }
}

export default AppHeader;