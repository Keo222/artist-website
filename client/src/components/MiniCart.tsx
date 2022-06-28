import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

import MiniCartItem from "./MiniCartItem";
import { TCartItem, TSaleArt } from "src/types/artInfoTypes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const MiniCartContainer = styled.div`
  z-index: 10;
  position: fixed;
  top: 10rem;
  right: 0;
  min-width: 20rem;
  width: 30%;
  max-height: calc(80% - 10rem);
  background: #ddd;
  border-radius: 0 0 0 10px;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: all 0.8s;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.lg}) {
    width: 50%;
  }
  @media screen and (${(props) => props.theme.sm}) {
    width: 80%;
    top: 0;
    max-height: 85vh;
  }
  @media screen and (${(props) => props.theme.xs}) {
    width: 100vw;
    top: 0;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  height: 8rem;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
`;

const TitleDiv = styled.div`
  height: 100%;
  width: 70%;
  font-size: 1.6rem;
  color: #333;
  display: flex;
  margin: auto;
`;
const Title = styled.h3`
  display: inline-block;
  margin-block: auto;
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  margin: auto 3rem auto 1rem;
  width: 2rem;
`;

const CloseIconContainer = styled.div`
  font-size: 2rem;
  margin: auto 3rem;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const EmptyCartDiv = styled.div`
  font-size: 1.6rem;
  margin: 2rem auto;
  width: 85%;
  text-align: center;
`;

const CartItems = styled.div`
  flex-grow: 1;
  min-height: 40%;
  overflow-y: scroll;
  padding-bottom: 3rem;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.highlightColor};
    border-radius: 10px;
  }
`;

const ButtonContainer = styled.div`
  height: 11rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 -2px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Total = styled.h4`
  font-size: 1.6rem;
  margin: 1rem;
  margin-bottom: 1rem;
  color: #444;
`;

const PurchaseButton = styled(Link)`
  display: block;
  width: 25%;
  text-decoration: none;
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: ${(props) => props.theme.highlightColor};
  padding: 1.5rem 4rem;
  margin: 1rem auto;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background: #222;
    color: ${(props) => props.theme.highlightColor};
    /* box-shadow: 0 5px 10px 4px rgba(0,0,0,.3); */
    /* transform: translateY(-2px); */
  }
`;

type Props = {
  setShowMiniCart: React.Dispatch<React.SetStateAction<boolean>>;
  showMiniCart: boolean;
  art: TSaleArt[];
  cart: TCartItem[];
  setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
  updateCartQty: (newId: string, newQty: number) => void;
};

function MiniCart({
  setShowMiniCart,
  showMiniCart,
  art,
  cart,
  setCart,
  updateCartQty,
}: Props) {
  const cartItemCards = cart.map((c) => {
    const item: TSaleArt | undefined = art.find(
      (i: TSaleArt) => i.id === c.id
    );
    if (typeof item !== "undefined") {
      return (
        <MiniCartItem
          key={uuid()}
          name={item.name}
          price={item.price}
          id={item.id}
          cart={cart}
          setCart={setCart}
          qty={c.qty}
          updateCartQty={updateCartQty}
          artImg={item.img}
        />
      );
    } else {
      return <p>Item Not Found</p>;
    }
  });

  const findTotal = () => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        const idx = art.findIndex((a) => a.id === cart[i].id);
        total += art[idx].price * cart[i].qty;
      }
    }
    return total;
  };

  const total = findTotal();

  // trial at making screen not scroll
  let screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth < 501) {
      console.log("SMALL SCREEN");
      document.getElementById("root")!.style.overflowY = "hidden";
      document.getElementById("root")!.style.position = "fixed";
    }
    return () => {
      document.getElementById("root")!.style.overflowY = "initial";
      document.getElementById("root")!.style.position = "initial";
    };
  });

  return (
    <MiniCartContainer>
      {/* CART TITLE */}
      <TitleContainer>
        <TitleDiv>
          <IconContainer>
            <FontAwesomeIcon icon={faShoppingCart as IconProp} />
          </IconContainer>
          <Title>Items in Cart:</Title>
        </TitleDiv>
        <CloseIconContainer>
          <CloseButton onClick={() => setShowMiniCart(!showMiniCart)}>
            <FontAwesomeIcon icon={faTimes as IconProp} />
          </CloseButton>
        </CloseIconContainer>
      </TitleContainer>
      {/* CART ITEMS */}
      {cart.length > 0 ? (
        <CartItems>{cartItemCards}</CartItems>
      ) : (
        <EmptyCartDiv>
          <p>You don't have any items in your cart yet!</p>
        </EmptyCartDiv>
      )}

      {/* PURCHASE BUTTON TO GO TO CHECKOUT PAGE */}
      <ButtonContainer>
        <Total>Total: ${total}.00</Total>
        <PurchaseButton
          to="/checkout"
          onClick={() => setShowMiniCart(!showMiniCart)}
        >
          Checkout
        </PurchaseButton>
      </ButtonContainer>
    </MiniCartContainer>
  );
}

export default MiniCart;
