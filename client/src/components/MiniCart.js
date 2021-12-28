import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

const MiniCartContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 10rem;
  right: 0;
  min-width: 20rem;
  width: 30%;
  height: 80rem;
  background: #ddd;
  /* border: 1px solid #333;
  border-top: none;
  border-right: none; */
  border-radius: 0 0 0 10px;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.3);
  display: ${props => props.visible ? 'flex' : 'none'} ;
  flex-direction: column;
`
const TitleContainer = styled.div`
  display: flex;
  height: 10%;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
`

const TitleDiv = styled.div`
  width: 70%;
  font-size: 2rem;
  color: #333;
  display: flex;
  margin: auto;
`
const IconContainer = styled.div`
  margin: auto 2rem;
  width: 2rem;
`

const CloseIconContainer = styled.div`
  font-size: 2rem;
  margin: auto 3rem;
`

const CloseButton = styled.div`
  width: 30%;
  cursor: pointer;
`

const CartItems = styled.div`
  height: 75%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background-color: yellowgreen;
    border-radius: 10px;
  }
`

const MiniItemContainer = styled.div`
  width: 80%;
  height: 10rem;
  margin: 2rem auto;
  border-radius: 10px;
  display: flex;
  background: #fff;
  /* text-align: center; */
  justify-content: center;
`

const DeleteItem = styled.div`
  margin: auto;
  margin-left: 2rem;
  font-size: 1.4rem;
`

const ItemName = styled.p`
  display: block;
  margin-left: 3rem;
  font-size: 1.6rem ;
  padding-top: 2rem;
  width: 50%;
`

const ItemPrice = styled.p`
  width: 20%;
  font-size: 1.6rem ;
  padding-top: 2rem;
`

const QtyNum = styled.p`
  width: 20%;
  font-size: 1.6rem ;
  padding-top: 2rem;
`

const ButtonContainer = styled.div`
  height: 15%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 -2px 10px 0px rgba(0, 0, 0, 0.3);
`

const Total = styled.h4`
  font-size: 1.6rem;
  margin: 1.4rem;
  color: #444;
`

const PurchaseButton = styled(Link)`
  display: block;
  width: 25%;
  text-decoration: none;
  color: #444;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: yellowgreen;
  padding: 2rem 5rem;
  margin: auto;
  margin-top: 0;
  border-radius: 10px;
`

function MiniCart({showMiniCart, setMiniCart}) {
  return (
    <MiniCartContainer visible={showMiniCart}>
      {/* CART TITLE */}
      <TitleContainer>
        <TitleDiv>
          <IconContainer>
            <FontAwesomeIcon icon={faShoppingCart} />
          </IconContainer>
          <h3>
            Items in Cart:
          </h3>
        </TitleDiv>
        <CloseIconContainer>
          <CloseButton onClick={() => setMiniCart(!showMiniCart)}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </CloseIconContainer>
      </TitleContainer>
      {/* CART ITEMS */}
      <CartItems>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
        <MiniItemContainer>
          <DeleteItem>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteItem>
          <ItemName>ART PIECE</ItemName>
          <QtyNum>Qty: 1</QtyNum>
          <ItemPrice>$25.00</ItemPrice>
        </MiniItemContainer>
      </CartItems>

      {/* PURCHASE BUTTON TO GO TO CHECKOUT PAGE */}
      <ButtonContainer>
        <Total>Total: $200.00</Total>
        <PurchaseButton to="/checkout" onClick={() => setMiniCart(!showMiniCart)}>Checkout</PurchaseButton>
      </ButtonContainer>

    </MiniCartContainer>
  )
}

export default MiniCart
