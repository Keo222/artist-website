import React from 'react'
import styled from 'styled-components';

import CartItem from './CartItem';

const TextCenteringDiv = styled.div`
  text-align: center;
`
const ShoppingCartDiv = styled.div`
  width: 90%;
  margin: 0 auto;
`

const CartTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
`

function ShoppingCart() {
  return (
    <ShoppingCartDiv>
      <TextCenteringDiv>
        <CartTitle>CART ITEMS:</CartTitle>
      </TextCenteringDiv>
      <div>
        <CartItem />
      </div>
    </ShoppingCartDiv>
  )
}

export default ShoppingCart
