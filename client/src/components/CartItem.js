import React from 'react';
import styled from 'styled-components';

const CartItemDiv = styled.div`
  background: #fff;
  border-radius: 30px;
  width: 70%;
  height: 12rem;
  margin: 4rem auto;
  display: flex;
`
const CartImgDiv = styled.div`
  width: 20%;
  border-right: 1px solid black;
`

// NAME IN CART
const CartNameDiv = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
`
const ItemName = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  flex-basis: 40%;
`

const ItemDescription = styled.p`
  margin-top: 0;
  font-size: 1.4rem;
  font-weight: 300;
  flex-basis: 60%;
`

const CartPriceDiv = styled.div`
  width: 30%;
  border-left: 1px solid black;
  text-align: center;
  display: flex;
`
const QtyDiv = styled.div`
  margin: auto;
  flex-basis: 50%;
  font-size: 1.6rem;
`

const Label = styled.label`
  margin-right: 1rem;
`
const TotalAndRemoveDiv = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
`

const TotalDiv = styled.div`
  font-size: 2rem;
  /* flex-basis: 60%; */
  /* margin: auto; */
`

const RemoveDiv = styled.div`
  font-size: 1.2rem;
  /* flex-basis: 40%; */
`

const TopInnerText = styled.p`
margin-top: 4rem;
margin-bottom: 0;
`
const BottomInnerText = styled.p`
  margin-top: 2rem;
  margin-bottom: 0;
`

function CartItem() {
  return (
    <CartItemDiv>
      <CartImgDiv>

      </CartImgDiv>
      <CartNameDiv>
        <ItemName>Item</ItemName>
        <ItemDescription>Description</ItemDescription>
      </CartNameDiv>
      <CartPriceDiv>
        <QtyDiv>
        <Label htmlFor="numItems">Qty:</Label>
        <select>
          {/* <option value="0">0</option> */}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </QtyDiv>
        <TotalAndRemoveDiv>
          <TotalDiv><TopInnerText>$40</TopInnerText></TotalDiv>
          <RemoveDiv><BottomInnerText>Remove</BottomInnerText></RemoveDiv>
        </TotalAndRemoveDiv>
      </CartPriceDiv>
      
    </CartItemDiv>
  )
}

export default CartItem
