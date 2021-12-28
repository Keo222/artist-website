import React from 'react';
import styled from 'styled-components';
import { TextDiv } from '../StyledElements/divs';

const AboutHeading = styled.h1`
  color: yellowgreen;
  font-family: 'Rock 3D', cursive;
  font-size: 6rem;
  padding-top: 3rem;
`

const AboutText = styled.p`
  font-size: 2rem;
  color: #ddd;
`
const AboutContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 5rem;
`

function Reeds() {
  return (
    <TextDiv>
      <AboutHeading>REEDS</AboutHeading>
      <AboutContainer>
        <AboutText>
          All reeds are Herzberg style and shape.
        </AboutText>
      </AboutContainer>
    </TextDiv>
  )
}

export default Reeds
