import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = styled.nav `
  background: #444;
  height: 10vh;
  display: flex;
  box-shadow: 0px 8px 16px 8px rgba(0,0,0,0.22);
  text-align: center;
`

const LogoDiv = styled.div`
  flex-basis: 15%;
`
const NavLinks = styled.div`
  flex-basis: 70%;
  display: flex;
  align-content: center;
  justify-content: center;
`
const ShoppingCartLink = styled.div`
  flex-basis: 15%;
`

const LinkBtn = styled(Link)`
  font-size: 2rem;
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  margin: auto auto;
  transition: all .2s;
  border: 1px solid white;
  border-radius: 3px;
  box-shadow: 0px 8px 16px 8px rgba(0,0,0,0.22);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px 10px rgba(0,0,0,0.19);
  }
`

function Navbar() {
  return (
    <Nav>
      <LogoDiv>
        <h3>REEDS</h3>
      </LogoDiv>
      <NavLinks>
        <LinkBtn to="/">Home</LinkBtn>
        <LinkBtn to="/about">About</LinkBtn>
        <LinkBtn to="/contact">Contact</LinkBtn>
        <LinkBtn to="/checkout">Checkout</LinkBtn>
      </NavLinks>
      <ShoppingCartLink>
        <h3>CART</h3>
      </ShoppingCartLink>
    </Nav>
  )
}

export default Navbar
