import React from "react";
import styled from "styled-components";

import ArtSaleItem from "../components/ArtSaleItem";

import { TextDiv, PageDiv } from "../StyledElements/divs";
import { Heading, ParagraphText } from "../StyledElements/typography";

const StoreDiv = styled(PageDiv)`
  margin-top: 10rem;
`;

const AboutDiv = styled.div`
  display: flex;
  @media screen and (${(props) => props.theme.lg}) {
    flex-direction: column;
  }
`;

const LeftInfoDiv = styled.div`
  width: 40%;
  @media screen and (${(props) => props.theme.lg}) {
    width: 100%;
  }
`;

// const AboutHeading = styled.h1`
//   color: ${props => props.theme.highlightColor};
//   font-family: 'Rock 3D', cursive;
//   font-size: 6rem;
//   padding-top: 3rem;
// `

const AboutInfoDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

// const AboutText = styled.p`
//   font-size: 2rem;
//   color: #ddd;
// `
// SALE ITEMS
const SaleItems = styled.div`
  width: 100%;
  margin-top: 15rem;
  @media screen and (${(props) => props.theme.lg}) {
    margin-top: 5rem;
  }
`;

// PRINT CART STATE

function Art({ art, cart, setAddCartButton }) {
  const artListings = art.map((a) => (
    <ArtSaleItem
      name={a.name}
      desc={a.desc}
      price={a.price}
      pic={a.img}
      id={a.id}
      cart={cart}
      setAddCartButton={setAddCartButton}
      key={a.id}
    />
  ));

  return (
    <StoreDiv>
      <AboutDiv>
        <LeftInfoDiv>
          <TextDiv>
            <Heading>Art</Heading>
            <AboutInfoDiv>
              <ParagraphText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque modi aperiam est reprehenderit ab illo, porro, iusto
                enim ad accusamus fugit! Ipsa quae asperiores odio
                doloribus facere, ipsum ex voluptates nulla? Doloremque ut
                animi corrupti vel quam? Accusantium ea eaque neque facilis
                cupiditate iste repudiandae enim, explicabo molestiae alias
                est reprehenderit aliquid fugit dolore ut nemo eius
                deserunt aliquam. Vel ipsa, a nostrum nisi unde earum nihil
                iste, ut iusto, ad debitis laboriosam. Id sunt consequatur
                ullam asperiores, mollitia eos excepturi molestias
                explicabo quam voluptates doloribus fuga nam autem quidem
                assumenda illo dolore error placeat aspernatur vero
                laboriosam rerum distinctio facilis. Reiciendis eum
                necessitatibus nesciunt enim a voluptatum harum eos, labore
                unde molestiae, quos suscipit voluptates, error rerum rem
                odit culpa cum laudantium repellendus expedita eaque
                eligendi veritatis non. Ut nihil dignissimos consectetur
                incidunt non sapiente modi asperiores consequuntur qui
                eius, autem, alias aperiam quasi enim. Reprehenderit,
                voluptatibus iste? Maxime repellat est necessitatibus error
                tempore, accusantium consequuntur qui nulla! Cum natus,
                nemo placeat id doloribus autem beatae, expedita possimus
                nesciunt iusto adipisci quaerat. Quisquam cum rerum eaque
                laborum, molestias fugiat veniam ratione recusandae
                voluptas dolore, nostrum autem, possimus repellat facilis
                deleniti nesciunt? Harum adipisci dicta est, debitis vel
                eum culpa.
              </ParagraphText>
            </AboutInfoDiv>
          </TextDiv>
        </LeftInfoDiv>
        <SaleItems>{artListings}</SaleItems>
      </AboutDiv>
    </StoreDiv>
  );
}

export default Art;
