/**
 * Created by Kyle on 5/23/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class AppNav extends React.Component{
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


    render(){
        return(
        <Navbar color="faded" light toggleable full>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">PactSafe Example React App</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/register">Register</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        );
    }
}

export default AppNav;