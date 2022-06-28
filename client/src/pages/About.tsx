import React from "react";
import styled from "styled-components";
import { TextDiv, PageDiv } from "../StyledElements/divs";
import { Heading, ParagraphText } from "../StyledElements/typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const AboutContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const SocialLinksDiv = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.highlightColor};
  padding-bottom: 4rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.highlightColor};
  margin: 0 2rem;
`;

function About() {
  return (
    <PageDiv>
      <TextDiv>
        <Heading>ABOUT</Heading>
        <AboutContainer>
          <ParagraphText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nibh lacus, vestibulum ut fermentum at, vestibulum
            vel nisi. Sed ut condimentum nibh, at lobortis purus. In
            molestie, nisl ac maximus bibendum, odio leo egestas leo, ac
            imperdiet justo arcu ut dui. Cras quis felis viverra,
            ullamcorper est a, placerat risus. Etiam vel urna aliquam,
            viverra dui a, mattis diam. In hac habitasse platea dictumst.
            Ut consequat dui libero, non iaculis mauris fringilla sed.
            Donec euismod feugiat tincidunt. Fusce cursus ante eget
            eleifend finibus. Sed dignissim quis neque sed blandit. Ut
            porta mi a velit porta, sit amet consectetur neque molestie.
            Phasellus eleifend feugiat ullamcorper. Aliquam erat volutpat.
            Etiam blandit pretium diam sed mollis. Maecenas quis malesuada
            diam. Suspendisse cursus at risus lobortis pretium. Morbi
            rutrum tellus et nunc facilisis, vel sagittis erat placerat.
            Nullam fermentum nisi dictum, semper dui quis, hendrerit dui.
            Praesent mollis quam sed justo suscipit, sit amet.Frankie
            Winterbourne is an artist residing in Portland, OR. They
            primarily focus on screenprinting, but also enjoy ceramics,
            making stickers, and crying while pooping. Frankie really needs
            to send me a bio soon so I can complete this part. Here is some
            filler text that only Dryden can read: Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Repudiandae ut accusantium
            officia iure? Corrupti autem doloremque, voluptate sed quod
            deserunt veritatis assumenda? Laboriosam ad, nemo illo ipsa
            sint ea porro cumque consequuntur et, rerum officia iste odio
            magni omnis unde recusandae culpa ducimus, minima maxime.
            Harum, molestias. Molestiae, autem. Soluta, maiores architecto
            iure quam obcaecati adipisci quis impedit vitae pariatur quo
            harum vel consectetur suscipit, id reiciendis, dolores nostrum
            corporis voluptas quidem voluptatem atque accusamus ipsum nihil
            hic. Illo ipsam voluptatum eligendi saepe harum ab doloremque
            eos consequuntur. Tempora, facilis.
          </ParagraphText>
        </AboutContainer>
        <SocialLinksDiv>
          <SocialLink
            href="https://www.instagram.com/frank_winterbourne/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram as IconProp} />
          </SocialLink>
        </SocialLinksDiv>
      </TextDiv>
    </PageDiv>
  );
}
export default About;
