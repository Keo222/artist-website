import React, {useState} from 'react'
import styled from 'styled-components';

const CenteringDiv = styled.div`
  text-align: center;
`

function ShoppingCart() {
  const [cart, setcart] = useState({})
  return (
    <CenteringDiv>
      <h2>SHOPPING CART</h2>
    </CenteringDiv>
  )
}

export default ShoppingCart
