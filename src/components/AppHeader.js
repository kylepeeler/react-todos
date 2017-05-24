/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import AppNav from './AppNav';
import logo from '../logo.svg';
import './AppHeader.css';

class AppHeader extends Component{

    render(){
        return(
            <Container fluid={true} className="app-header-wrapper">
                <AppNav/>
                <Row>
                    <Col>
                        <div className="app-header">
                            <img src={logo} className="app-logo" alt="logo" />
                            <h2>Example App</h2>
                            <h5>{this.props.pageTitle}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default AppHeader;