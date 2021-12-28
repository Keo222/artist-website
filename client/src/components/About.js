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

function About() {
  return (
    <TextDiv>
      <AboutHeading>ABOUT</AboutHeading>
      <AboutContainer>
        <AboutText>
          Frankie Winterbourne is an artist residing in Portland, OR. They primarily focus on screenprinting, but also enjoy ceramics, making stickers, and crying while pooping. Frankie really needs to send me a bio soon so I can complete this part. Here is some filler text that only Dryden can read: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga, unde quod qui aut eveniet, nesciunt aliquam vero iste incidunt nostrum ratione autem eos voluptatum sint voluptatem animi saepe quibusdam. Culpa impedit id fugiat a excepturi voluptatum hic, facilis distinctio, unde itaque totam voluptas deserunt voluptates mollitia cumque corrupti quos sequi nulla sunt! Dicta sequi qui modi nesciunt corrupti nam beatae enim consectetur voluptas laboriosam. Corrupti quod est sunt aut saepe. Culpa tenetur, natus non unde, ea incidunt quaerat excepturi illo facere rem pariatur eligendi magni tempora inventore quae! In.
        </AboutText>
      </AboutContainer>
    </TextDiv>
  )
}

{/* <AboutText>
  Kyle Olsen is a freelance bassoonist in Portland, OR. He is a regular substitute with the Oregon Symphony, the Oregon Ballet Theater and the Portland Opera. While attending Rice University, where he received his Bachelor's of Music degree, Kyle studied under Benjamin Kamins. He continued his studies at Juilliard where he studied under William Short. All of the reeds made by Kyle are made using the Herzberg shape. He has also performed with groups such as The Music Academy of the West, the National Repertory Orchestra, and the Colorado Music Festival where he had a temporary position for one season.
</AboutText> */}

export default About
