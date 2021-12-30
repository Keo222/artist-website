import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ItemAndDelete = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`

const DeleteDiv = styled.div`
  width: 10%;
`

const MiniItemContainer = styled.div`
  width: 80%;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  background: #fff;
  justify-content: center;
  overflow: hidden;
`

const DeleteItem = styled.div`
  justify-content: center;
  align-items: center;
  margin: 2rem;
  font-size: 1.4rem;
  width: 10%;
  cursor: pointer;
`

const StyledFAIcon = styled(FontAwesomeIcon)`
  display: block;
  margin-top: 4rem;
`

const ImgDiv = styled.div`
  width: 10rem;
`
const ArtImg = styled.img`
  width: 100%;
  height: 100%;
`

const ItemName = styled.p`
  display: block;
  margin: auto;
  font-size: 1.6rem ;
  /* padding-top: 2rem; */
  width: 22%;
`

const ItemPrice = styled.p`
  width: 20%;
  font-size: 1.6rem ;
  padding-top: 2rem;
`

const QtyNum = styled.p`
  display: flex;
  flex-direction: column;
  width: 20%;
  font-size: 1.6rem ;
  padding-top: 2rem;
`

const StyledSelect = styled.select`
  width: 3rem;
`

function MiniCartItem({name, price, id, cart, setCart, qty, setCartSelect, art}) {
  const deleteItem = (item) => {
    console.log(cart)
    console.log(item)
    const idx = cart.findIndex(i => i.id === item)
    console.log(idx)
    const cartCopy = [...cart]
    cartCopy.splice(idx, 1);
    console.log(cartCopy)
    setCart(cartCopy);
  }
  return (
      <ItemAndDelete>
        <DeleteDiv>
          <DeleteItem onClick={() => deleteItem(id)}>
            <StyledFAIcon icon={faTimes} />
          </DeleteItem>
        </DeleteDiv>
          <MiniItemContainer>
          <ImgDiv>
            <ArtImg src={art} />
          </ImgDiv>
          <ItemName>{name}</ItemName>
          <QtyNum>
            <label htmlFor="numItems">Qty:</label>
            <StyledSelect name="numItems" id="numItems" defaultValue={parseInt(qty)} onChange={(e) => setCartSelect(id, parseInt(e.target.value))}>
              {/* <option value="0">0</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </StyledSelect>
          </QtyNum>
          <ItemPrice>${price * qty}.00</ItemPrice>
        </MiniItemContainer>
      </ItemAndDelete>
  )
}

export default MiniCartItem
