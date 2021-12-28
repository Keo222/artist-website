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

function MiniCartItem({name, qty}) {
  return (
    <MiniItemContainer>
      <DeleteItem>
        <FontAwesomeIcon icon={faTimes} />
      </DeleteItem>
      <ItemName>{name}</ItemName>
      <QtyNum>Qty: {qty}</QtyNum>
      <ItemPrice>$25.00</ItemPrice>
    </MiniItemContainer>
  )
}

export default MiniCartItem
