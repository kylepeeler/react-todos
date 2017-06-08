/**
 * Created by Kyle on 5/23/17.
 */
import React from 'react';
import {Link, NavLink as RRNavLink} from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import logoblue from '../PSVaultLogoBlue.svg';


class AppNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <Navbar color="faded" light toggleable full>
                <NavbarToggler right onClick={this.toggle}/>
                <NavbarBrand href="/">
                    <img src={logoblue} className="app-header-logo" alt="logo"/>
                    PactSafe To-dos
                </NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/" exact>{this.props.pathname === "/todos" ? "Logout" : "Login"}</NavLink>
                        </NavItem>
                        {this.props.pathname !== '/todos' ? <NavItem>
                            <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                        </NavItem> : null}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default AppNav;