/**
 * Created by Kyle on 5/19/17.
 */
import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import AppNav from './AppNav';
import logo from '../logo.svg';
import './AppHeader.css';

class AppHeader extends React.Component {

    render() {
        return (
            <Container fluid={true} className="app-header-wrapper">
                <AppNav {...this.props.location}/>
                <Row>
                    <Col>
                        <div className="app-header">
                            <img src={logo} className="app-logo" alt="logo"/>
                            <h2>PactSafe To-dos</h2>
                            <h5>{this.props.pageTitle}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default AppHeader;