import React from 'react';
import {Nav, Navbar} from "react-bootstrap/cjs";
import Container from "react-bootstrap/cjs/Container";
import {LANDING_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/cjs/Button";
import logo from "../assets/logo.svg";

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" style={{zIndex: 1}} className="mx-1">
            <Container className="justify-content-between align-items-center">
                <Navbar.Brand href={LANDING_ROUTE}>
                    <img
                        src={logo}
                        width="99"
                        height="26"
                        alt="Logo"/>
                </Navbar.Brand>
                <Nav className="gap-3">
                    <Nav.Link href="#home">Контакты</Nav.Link>
                    <Nav.Link href="#features">О нас</Nav.Link>
                    <Nav.Link href="#pricing">Войти</Nav.Link>
                    <Button>Еще нет аккаунта?</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;