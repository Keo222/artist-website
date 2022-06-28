import React from "react";

import styled from "styled-components";

const BtnPay = styled.button`
  font-size: 1.8rem;
  display: block;
  margin: 1rem auto;
  padding: 1.5rem 3.5rem;
  border-radius: 7px;
  background: green;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const BtnDisabled = styled(BtnPay)`
  background: #555;
  color: white;
  cursor: wait;
`;

type Props = {
  isDisabled: boolean;
};

function PayButton({ isDisabled }: Props) {
  return (
    <div>
      Is the button disabled: {isDisabled ? "yes" : "no"}
      {isDisabled ? (
        <BtnDisabled disabled>Disabled</BtnDisabled>
      ) : (
        <BtnPay>Pay Now</BtnPay>
      )}
    </div>
  );
}

export default PayButton;
