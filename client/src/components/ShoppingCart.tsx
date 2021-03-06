import React from "react";
import { TSaleArt, TCartItem } from "src/types/artInfoTypes";
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

const EmptyCartTitle = styled.p`
  display: block;
  font-size: 3rem;
  font-weight: 700;
  margin: 20rem 0 10rem;
`;

const Total = styled.h5`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 5rem;

  & span {
    font-weight: 300;
  }
`;

type Props = {
  art: TSaleArt[];
  cart: TCartItem[];
  updateCartQty: (newId: string, newQty: number) => void;
  setCart: React.Dispatch<React.SetStateAction<TCartItem[]>>;
};

function ShoppingCart({ art, cart, updateCartQty, setCart }: Props) {
  const cartItemCards = cart.map((c) => {
    const item: TSaleArt | undefined = art.find((i) => i.id === c.id);
    if (typeof item !== "undefined") {
      return (
        <CartItem
          name={item.name}
          desc={item.desc}
          id={item.id}
          key={item.id}
          price={item.price}
          img={item.img}
          qty={c.qty}
          cart={cart}
          setCart={setCart}
          updateCartQty={updateCartQty}
        />
      );
    } else {
      console.log("Error finding item for cart item");
      return null;
    }
  });

  const findTotal = () => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        const idx = art.findIndex((a) => a.id === cart[i].id);
        total += art[idx].price * cart[i].qty;
      }
    }
    return total;
  };

  const total = findTotal();
  return (
    <ShoppingCartDiv>
      <TextCenteringDiv>
        {cart.length > 0 ? (
          <CartTitle>CART ITEMS:</CartTitle>
        ) : (
          <EmptyCartTitle>Your cart is empty...</EmptyCartTitle>
        )}
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
      {total > 0 && (
        <Total>
          Total: <span>${total}.00</span>
        </Total>
      )}
    </ShoppingCartDiv>
  );
}

export default ShoppingCart;
