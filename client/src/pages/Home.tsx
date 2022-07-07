import React from "react";
import styled from "styled-components";
import { TextDiv, PageDiv } from "../StyledElements/divs";
import { Heading, ParagraphText } from "../StyledElements/typography";

const HomeContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

function Home() {
  return (
    <PageDiv>
      <TextDiv>
        <Heading>HOME</Heading>
        <HomeContainer>
          <ParagraphText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            esse accusamus nostrum! Enim fugiat, in quisquam nesciunt
            cumque totam qui aspernatur magnam, itaque vitae hic quaerat
            quas animi rerum quos! Officiis eligendi, recusandae quasi
            magni, ducimus blanditiis iste rerum doloremque praesentium
            earum sit! Beatae necessitatibus in deserunt recusandae
            incidunt, commodi quaerat culpa aliquid exercitationem delectus
            modi id, accusantium et possimus quas reprehenderit minus non
            doloremque tempora, sed eos. Ipsa enim non accusantium nulla,
            voluptas at dolorem quos error, pariatur perspiciatis quam eius
            quisquam corrupti aut deserunt facilis doloribus ea placeat,
            iusto accusamus inventore eligendi corporis eveniet ex?
            Excepturi, magnam delectus!
          </ParagraphText>
        </HomeContainer>
      </TextDiv>
    </PageDiv>
  );
}

export default Home;
