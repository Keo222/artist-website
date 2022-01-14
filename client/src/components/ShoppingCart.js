import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

const TextCenteringDiv = styled.div`
  text-align: center;
`;
const ShoppingCartDiv = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const CartTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

const Total = styled.h5`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 5rem;

  & span {
    font-weight: 300;
  }
`;

function ShoppingCart({ art, cart, setCartSelect }) {
  const cartItemCards = cart.map((c) => {
    const item = art.find((i) => i.id === c.id);
    return (
      <CartItem
        name={item.name}
        desc={item.desc}
        id={item.id}
        price={item.price}
        img={item.img}
        setCartSelect={setCartSelect}
      />
    );
  });

  const findTotal = () => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        const idx = art.findIndex((a) => a.id === cart[i].id);
        total += art[idx].price * cart[i].amt;
      }
    }
    return total;
  };

  const total = findTotal();
  return (
    <ShoppingCartDiv>
      <TextCenteringDiv>
        <CartTitle>CART ITEMS:</CartTitle>
      </TextCenteringDiv>
      <div>
        {cartItemCards}
        {/* {art.map((a) => (
          <CartItem
            name={a.name}
            desc={a.desc}
            id={a.id}
            price={a.price}
            img={a.img}
          />
        ))} */}
        {/* <CartItem
          name={a.name}
          desc={a.desc}
          id={a.id}
          price={a.price}
          img={a.name}
        /> */}
      </div>
      <Total>
        Total: <span>${total}.00</span>
      </Total>
    </ShoppingCartDiv>
  );
}

export default ShoppingCart;
