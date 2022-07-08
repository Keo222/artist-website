import React from "react";

import styled from "styled-components";

const BtnPay = styled.button`
  font-size: 1.8rem;
  display: block;
  margin-inline: auto;
  margin-top: 4rem;
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
  children: JSX.Element;
  id?: string;
};

function PayButton({ isDisabled, children }: Props) {
  return (
    <div>
      {isDisabled ? (
        <BtnDisabled disabled>Disabled</BtnDisabled>
      ) : (
        <BtnPay>{children}</BtnPay>
      )}
    </div>
  );
}

export default PayButton;
