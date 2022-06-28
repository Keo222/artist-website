import React, { useState } from "react";

// Routing
import { Link, useLocation } from "react-router-dom";

// Styling
import styled from "styled-components";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TCartItem } from "src/types/artInfoTypes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Nav = styled.nav`
  background: #444;
  height: 10rem;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  box-shadow: 0px 8px 16px 8px rgba(0, 0, 0, 0.22);
  text-align: center;
  z-index: 10;
`;

const LogoDiv = styled.div`
  flex-basis: 10%;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h3`
  display: block;
  font-family: "Rock 3D", cursive;
  font-size: 5rem;
  color: ${(props) => props.theme.highlightColor};
  margin: 1rem auto;
  @media screen and (${(props) => props.theme.sm}) {
    margin-left: 2rem;
  }
`;

const Bars = styled.div`
  display: none;
  color: #fff;
  font-size: 4rem;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-70%, 50%);
  cursor: pointer;
  @media screen and (${(props) => props.theme.sm}) {
    display: block;
  }
`;

const DropdownNav = styled.div<{ showDropdown: boolean }>`
  display: none;
  @media screen and (${(props) => props.theme.sm}) {
    /* display: ${(props) => (props.showDropdown ? "flex" : "none")}; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    z-index: 9;
    top: 10rem;
    width: 100vw;
    height: calc(50vh - 10rem);
    background: #777;
    text-align: center;
    border-radius: 0 0 5px 5px;
    transition: transform 0.6s;
    transform: translateY(-90vh);
    transform: ${(props) =>
      props.showDropdown ? "translateY(0)" : "translateY(-90vh)"};
  }
`;

const NavLinks = styled.div`
  flex-basis: 45%;
  display: flex;
  align-content: center;
  @media screen and (${(props) => props.theme.sm}) {
    display: none;
  }
`;
const ShoppingCartDiv = styled.div`
  flex-basis: 40%;
  color: ${(props) => props.theme.highlightColor};
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  transform: translate(-30%, 20%);
  border: 1px solid ${(props) => props.theme.highlightColor};
  border-radius: 50%;
  cursor: pointer;
  @media screen and (${(props) => props.theme.sm}) {
    transform: translate(-120%, 20%);
  }
`;
const NumItemsInCart = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 0.8rem;
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  color: #333;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  border-radius: 50%;
`;

const LinkBtn = styled(Link)`
  font-size: 1.6rem;
  padding: 1.3rem 2.5rem;
  color: white;
  text-decoration: none;
  margin: auto 3rem;
  transition: all 0.4s;
  border-radius: 9px;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px ${(props) => props.theme.highlightColor};
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
    border-radius: 20px;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  @media screen and (${(props) => props.theme.sm}) {
    margin: auto 40vw;
  }
`;
const DropdownLinkBtn = styled(Link)`
  font-size: 1.6rem;
  /* padding: 1.3rem 2.5rem; */
  color: white;
  text-decoration: none;
  margin: auto 3rem;
  transition: all 0.4s;
  border-radius: 9px;
  width: fit-content;
  text-align: center;
  @media screen and (${(props) => props.theme.sm}) {
    margin: auto 40vw;
  }
`;

const LinkPTag = styled.p`
  text-align: center;
`;

type Props = {
  showMiniCart: boolean;
  setShowMiniCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: TCartItem[];
};

function Navbar({ showMiniCart, setShowMiniCart, cart }: Props) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdown = () => setShowDropdown(!showDropdown);

  const totalItems = cart.reduce((sum, { qty }) => sum + qty, 0);
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/admin" && (
        <>
          <Nav>
            <LogoDiv>
              <LogoLink to="/">
                <Logo>FW</Logo>
              </LogoLink>
            </LogoDiv>
            <NavLinks>
              <LinkBtn to="/art">Store</LinkBtn>
              <LinkBtn to="/portfolio">Portfolio</LinkBtn>
              <LinkBtn to="/about">About</LinkBtn>
              <LinkBtn to="/contact">Commissions</LinkBtn>
            </NavLinks>
            <ShoppingCartDiv
              onClick={() => setShowMiniCart(!showMiniCart)}
            >
              <NumItemsInCart>{totalItems}</NumItemsInCart>
              <FontAwesomeIcon icon={faShoppingCart as IconProp} />
            </ShoppingCartDiv>
            <Bars onClick={() => dropdown()}>
              <FontAwesomeIcon icon={faBars as IconProp} />
            </Bars>
          </Nav>
          {showDropdown && (
            <DropdownNav showDropdown={showDropdown}>
              <LinkPTag>
                <DropdownLinkBtn to="/art" onClick={() => dropdown()}>
                  Store
                </DropdownLinkBtn>
              </LinkPTag>
              <LinkPTag>
                <DropdownLinkBtn
                  to="/portfolio"
                  onClick={() => dropdown()}
                >
                  Portfolio
                </DropdownLinkBtn>
              </LinkPTag>
              <LinkPTag>
                <DropdownLinkBtn to="/about" onClick={() => dropdown()}>
                  About
                </DropdownLinkBtn>
              </LinkPTag>
              <LinkPTag>
                <DropdownLinkBtn to="/contact" onClick={() => dropdown()}>
                  Commissions
                </DropdownLinkBtn>
              </LinkPTag>
            </DropdownNav>
          )}
        </>
      )}
    </>
  );
}

export default Navbar;
