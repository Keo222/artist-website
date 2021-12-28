import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MiniItemContainer = styled.div`
  width: 80%;
  height: 10rem;
  margin: 2rem auto;
  border-radius: 10px;
  display: flex;
  background: #fff;
  justify-content: center;
`

const DeleteItem = styled.div`
  margin: auto;
  margin-left: 2rem;
  font-size: 1.4rem;
  cursor: pointer;
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

function MiniCartItem({name, price, id, cart, setCart, qty}) {
  const deleteItem = (id) => {
    const i = cart.indexOf(id);
    const cartCopy = [...cart]
    cartCopy.splice(i, 1);
    setCart(cartCopy);
  }
  return (
    <MiniItemContainer>
      <DeleteItem onClick={() => deleteItem(id)}>
        <FontAwesomeIcon icon={faTimes} />
      </DeleteItem>
      <ItemName>{name}</ItemName>
      <QtyNum>
        <label htmlFor="numItems">Qty:</label>
        <select name="numItems" id="numItems" defaultValue={qty}>
          {/* <option value="0">0</option> */}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </QtyNum>
      <ItemPrice>${price}.00</ItemPrice>
    </MiniItemContainer>
  )
}

export default MiniCartItem
