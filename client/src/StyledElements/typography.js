import styled from "styled-components";

export const Heading = styled.h1`
  color: ${(props) => props.theme.highlightColor};
  font-family: "Rock 3D", cursive;
  font-size: 6rem;
  padding-top: 3rem;

  /* @media screen and (${(props) => props.theme.sm}) {
    font-size: 4rem;
  } */
  @media screen and (${(props) => props.theme.xs}) {
    font-size: 4rem;
  }
`;

export const ParagraphText = styled.p`
  font-size: 2rem;
  color: #ddd;

  @media screen and (${(props) => props.theme.sm}) {
    font-size: 1.6rem;
  }
  @media screen and (${(props) => props.theme.xs}) {
    font-size: 1.4rem;
  }
`;
