import React, { Component } from "react";
import "./css/cover.css";
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from "reactstrap";

class NavbarDcapan extends Component {
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
      <div>
      <Navbar color="faded" dark expand="md">
        <NavbarBrand href="/">D'capan Integral</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >¿Quiénes somos?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >Información de contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >Dónde comprar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink ></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >Ingresar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >Registrase</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavbarDcapan;
