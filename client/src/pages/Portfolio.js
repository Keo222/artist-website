import React from "react";
import { PageDiv } from "../StyledElements/divs";
import { Heading } from "../StyledElements/typography";
import styled from "styled-components";

// images

import art1 from "../imgs/portfolio/art1.jpg";
import art2 from "../imgs/portfolio/art2.jpg";
import art3 from "../imgs/portfolio/art3.jpg";
import art4 from "../imgs/portfolio/art4.jpg";
import art5 from "../imgs/portfolio/art5.jpg";
import art6 from "../imgs/portfolio/art6.jpg";
import art7 from "../imgs/portfolio/art7.jpg";
import art8 from "../imgs/portfolio/art8.jpg";
import art9 from "../imgs/portfolio/art9.jpg";
import art10 from "../imgs/portfolio/art10.jpg";
import art11 from "../imgs/portfolio/art11.jpg";
import art12 from "../imgs/portfolio/art12.jpg";
import art13 from "../imgs/portfolio/art13.jpg";
import art14 from "../imgs/portfolio/art14.jpg";

const CenteringDiv = styled.div`
  width: 50%;
  background: #333;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
`;

const PortfolioHeading = styled(Heading)`
  padding: 4rem 0;
`;

const BigDivGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 auto;
`;

const SingleColumn = styled.div``;

const ImgDiv = styled.div`
  margin-bottom: 1rem;
`;

const Img = styled.img`
  width: 100%;
`;

function Portfolio() {
  const images = [
    art1,
    art2,
    art3,
    art4,
    art5,
    art6,
    art7,
    art8,
    art9,
    art10,
    art11,
    art12,
    art13,
    art14,
  ];

  const col1Imgs = images.filter((e, i) => i % 3 === 3 - 3);
  const col2Imgs = images.filter((e, i) => i % 3 === 3 - 2);
  const col3Imgs = images.filter((e, i) => i % 3 === 3 - 1);

  return (
    <PageDiv>
      <CenteringDiv>
        <PortfolioHeading>Portfolio</PortfolioHeading>
      </CenteringDiv>
      <BigDivGrid>
        <SingleColumn>
          {col1Imgs.map((i) => (
            <ImgDiv>
              <Img src={i} />
            </ImgDiv>
          ))}
        </SingleColumn>
        <SingleColumn>
          {col2Imgs.map((i) => (
            <ImgDiv>
              <Img src={i} />
            </ImgDiv>
          ))}
        </SingleColumn>
        <SingleColumn>
          {col3Imgs.map((i) => (
            <ImgDiv>
              <Img src={i} />
            </ImgDiv>
          ))}
        </SingleColumn>
      </BigDivGrid>
    </PageDiv>
  );
}

export default Portfolio;
