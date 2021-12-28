import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav `
  background: #444;
  height: 10rem;
  display: flex;
  box-shadow: 0px 8px 16px 8px rgba(0,0,0,0.22);
  text-align: center;
`

const LogoDiv = styled.div`
  flex-basis: 10%;
`
const Logo = styled.h3`
  display: block;
  font-family: 'Rock 3D', cursive;
  font-size: 5rem;
  color: yellowgreen;
  /* transform: translateY(-0.5rem); */
  /* text-align: initial; */
  margin: 1rem auto;
`

const NavLinks = styled.div`
  flex-basis: 45%;
  display: flex;
  align-content: center;
  /* justify-content: center; */
`
const ShoppingCartDiv = styled.div`
  flex-basis: 40%;
  color: yellowgreen;
  font-size: 2.5rem;
  position: absolute;
  top: 1.1rem;
  right: 3rem;
  padding: 2rem;
  border: 1px solid yellowgreen;
  border-radius: 50%;
  cursor: pointer;
`
const NumItemsInCart = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 0.8rem;
  width: 2rem;
  height: 2rem;
  background-color: #eee;
  color: #333;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  border-radius: 50%;
`

const LinkBtn = styled(Link)`
  font-size: 1.6rem;
  padding: 1.3rem 2.5rem;
  color: white;
  text-decoration: none;
  margin: auto 3rem;
  transition: all .4s;
  border-radius: 9px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px 10px rgba(0,0,0, 0.19);
    background: #777;
  }
`

function Navbar({showMiniCart, setMiniCart}) {
  return (
    <Nav>
      <LogoDiv>
        <Logo>FW</Logo>
      </LogoDiv>
      <NavLinks>
        <LinkBtn to="/">Home</LinkBtn>
        <LinkBtn to="/art">Art</LinkBtn>
        <LinkBtn to="/about">About</LinkBtn>
        <LinkBtn to="/contact">Contact</LinkBtn>
      </NavLinks>
      <ShoppingCartDiv onClick={() => setMiniCart(!showMiniCart)}>
        <NumItemsInCart>2</NumItemsInCart>
        <FontAwesomeIcon icon={faShoppingCart} />
      </ShoppingCartDiv>
    </Nav>
  )
}

export default Navbar
