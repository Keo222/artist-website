import styled from "styled-components";

export const TextDiv = styled.div`
  width: 70%;
  background: #444;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10rem;
  text-align: center;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.3);
  @media screen and (${(props) => props.theme.lg}) {
    width: 85%;
  }
`;

export const PageDiv = styled.div`
  margin: 15rem 0 10rem 0;
`;

export const ScrollToggleDiv = styled.div<{ showMiniCart: boolean }>`
  @media screen and (${(props) => props.theme.sm}) {
    overflow: ${(props) => (props.showMiniCart ? "hidden" : "initial")};
  }
`;
