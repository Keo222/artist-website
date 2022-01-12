import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ItemAndDelete = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`;

const DeleteDiv = styled.div`
  width: 10%;
`;

const MiniItemContainer = styled.div`
  width: 80%;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  background: #fff;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (${(props) => props.theme.xs}) {
    width: 87%;
  }
`;

const NameAndQty = styled.div`
  display: flex;
  justify-content: space-around;
  width: 45%;

  @media screen and (${(props) => props.theme.xl}) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const DeleteItem = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 1.4rem;
  width: 10%;
  cursor: pointer;
`;

const StyledFAIcon = styled(FontAwesomeIcon)`
  display: block;
  margin-top: 4rem;
`;

const ImgDiv = styled.div`
  width: 10rem;
`;
const ArtImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ItemName = styled.p`
  display: block;
  margin: auto 0;
  font-size: 1.6rem;
  font-weight: 700;
  @media screen and (${(props) => props.theme.xl}) {
    margin-bottom: 0;
  }
`;

const QtyNum = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  margin: auto 0;
  padding-top: 0.2rem;
  @media screen and (${(props) => props.theme.xl}) {
    margin: auto;
  }
`;

const ItemPrice = styled.p`
  width: 25%;
  font-size: 1.6rem;
  margin: auto 0;
`;

const StyledSelect = styled.select`
  width: 4rem;
  margin-left: 1rem;
  font-size: 1.6rem;
`;

function MiniCartItem({
  name,
  price,
  id,
  cart,
  setCart,
  qty,
  setCartSelect,
  art,
}) {
  const deleteItem = (item) => {
    console.log(cart);
    console.log(item);
    const idx = cart.findIndex((i) => i.id === item);
    console.log(idx);
    const cartCopy = [...cart];
    cartCopy.splice(idx, 1);
    console.log(cartCopy);
    setCart(cartCopy);
  };
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
        <NameAndQty>
          <ItemName>{name}</ItemName>
          <QtyNum>
            <label htmlFor="numItems">Qty:</label>
            <StyledSelect
              name="numItems"
              id="numItems"
              defaultValue={parseInt(qty)}
              onChange={(e) => setCartSelect(id, parseInt(e.target.value))}
            >
              {/* <option value="0">0</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </StyledSelect>
          </QtyNum>
        </NameAndQty>
        <ItemPrice>${price * qty}.00</ItemPrice>
      </MiniItemContainer>
    </ItemAndDelete>
  );
}

export default MiniCartItem;
