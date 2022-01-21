import React from "react";
import styled from "styled-components";

const CartItemDiv = styled.div`
  background: #fff;
  border-radius: 30px;
  width: 65%;
  height: 20rem;
  margin: 4rem auto;
  display: flex;
  overflow: hidden;

  @media screen and (${(props) => props.theme.lg}) {
    width: 75%;
  }
  @media screen and (${(props) => props.theme.md}) {
    width: 85%;
  }
  @media screen and (${(props) => props.theme.sm}) {
    width: 95%;
  }
  @media screen and (${(props) => props.theme.xs}) {
    width: 95%;
    flex-direction: column;
    height: 68rem;
  }
`;
const CartImgDiv = styled.div`
  width: 20rem;
  border-right: 1px solid black;
  @media screen and (${(props) => props.theme.xs}) {
    width: 100%;
    height: 40rem;
    overflow-y: hidden;
  }
`;
const ArtImg = styled.img`
  width: 100%;
  height: 100%;
`;

// NAME IN CART
const CartNameDiv = styled.div`
  width: 45%;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media screen and (${(props) => props.theme.xs}) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;
const ItemName = styled.p`
  margin-top: 3rem;
  padding-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  flex-basis: 40%;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

const ItemDescription = styled.p`
  margin-top: 0;
  font-size: 1.4rem;
  font-weight: 300;
  flex-basis: 60%;
`;

const QtyDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.6rem;
  align-items: flex-start;
  @media screen and (${(props) => props.theme.xs}) {
    width: 100%;
  }
`;
const CartPriceDiv = styled.div`
  width: 35%;
  border-left: 1px solid black;
  text-align: center;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: 2fr 1fr;
  @media screen and (${(props) => props.theme.xs}) {
    border-left: none;
    border-top: 1px solid black;
    width: 100%;
  }
`;

const Label = styled.label`
  margin-right: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const QtySelect = styled.select`
  width: 60%;
`;
// const TotalAndQtyDiv = styled.div`
//   display: flex;
//   flex-basis: 50%;
// `;

const TotalDiv = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopInnerText = styled.div`
  margin-top: 2rem;
  font-size: 2.5rem;
`;
const RemoveDiv = styled.div`
  grid-column: span 2;
  font-size: 1.2rem;
  /* flex-basis: 40%; */
`;
const BottomInnerText = styled.p`
  margin-top: 2rem;
  margin-bottom: 0;
  color: red;
  text-decoration: underline;
  cursor: pointer;
`;

function CartItem({
  name,
  desc,
  id,
  price,
  img,
  qty,
  cart,
  setCart,
  setCartSelect,
}) {
  const deleteItem = (item) => {
    const idx = cart.findIndex((i) => i.id === item);
    const cartCopy = [...cart];
    cartCopy.splice(idx, 1);
    setCart(cartCopy);
  };
  return (
    <CartItemDiv>
      <CartImgDiv>
        <ArtImg src={img} />
      </CartImgDiv>
      <CartNameDiv>
        <ItemName>{name}</ItemName>
        <ItemDescription>{desc}</ItemDescription>
      </CartNameDiv>
      <CartPriceDiv>
        <TotalDiv>
          <TopInnerText>${qty * price}.00</TopInnerText>
        </TotalDiv>
        <QtyDiv>
          <Label htmlFor="numCartItems">Qty:</Label>
          <QtySelect
            name="numCartItems"
            id="numCartItems"
            defaultValue={parseInt(qty)}
            onChange={(e) => setCartSelect(id, parseInt(e.target.value))}
          >
            {/* <option value="0">0</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </QtySelect>
        </QtyDiv>

        <RemoveDiv>
          <BottomInnerText onClick={() => deleteItem(id)}>
            Remove
          </BottomInnerText>
        </RemoveDiv>
      </CartPriceDiv>
    </CartItemDiv>
  );
}

export default CartItem;
