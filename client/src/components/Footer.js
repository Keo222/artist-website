import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 4rem;
  background: #333;
  color: #eee;
  bottom: 0;

  @media screen and (${props => props.theme.sm}){
    display: none;
  }
`

const TextDiv = styled.div`
  margin-left: 3rem;
  float: left;
`

const FooterText = styled.h5`
font-size: 1.3rem;
  line-height: 0;
`

const SocialsDiv = styled.div`
  font-size: 3rem;
  margin-right: 3rem;
  float: right;
`
const SocialLink = styled.a`
  color: ${props => props.theme.highlightColor};
  margin: 0 2rem;
`

function Footer() {
  return (
    <FooterDiv>
      <TextDiv>
        <FooterText>FRANKIE WINTERBOURNE BUSINESS BUREAU FOR EXCELLENCE IN BUSINESS</FooterText>
      </TextDiv>
      <SocialsDiv>
      <SocialLink href="https://www.instagram.com/frank_winterbourne/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
        <SocialLink href="https://soundcloud.com/frank-winterbourne" target="_blank">
          <FontAwesomeIcon icon={faSoundcloud} />
        </SocialLink>
      </SocialsDiv>
    </FooterDiv>
  )
}

export default Footer
