import React from "react";
import type { ReactNode } from "react";
import styled from "styled-components";

// Styled-Components
const MessageDiv = styled.div`
  margin-top: 3rem;
  margin-inline: auto;
  background-color: rgba(255, 0, 0, 0.507);
  border: 2px solid rgb(255, 0, 0);
  border-radius: 10px;
  padding: 1rem 3rem;
  width: fit-content;
  text-align: center;
`;

const Message = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

type Props = { children: ReactNode };

const StripeMessage = ({ children }: Props) => {
  return (
    <MessageDiv>
      <Message>{children}</Message>
    </MessageDiv>
  );
};

export default StripeMessage;
