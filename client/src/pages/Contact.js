import React from "react";
import styled from "styled-components";
import { TextDiv, PageDiv } from "../StyledElements/divs";
import { Heading, ParagraphText } from "../StyledElements/typography";

// const ContactHeading = styled.h1`
//   color: ${props => props.theme.highlightColor};
//   font-family: 'Rock 3D', cursive;
//   font-size: 6rem;
//   padding-top: 3rem;
// `

// const ContactText = styled.p`
//   font-size: 2rem;
//   color: #ddd;
// `

const ContactInfoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

const ContactFormDiv = styled.div`
  width: 60%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
`;

const ContactForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

const ContactLabel = styled.label`
  font-size: 1.6rem;
  margin-right: 1rem;
`;
const ContactInput = styled.input`
  height: 2rem;
`;
const ContactSelect = styled.select`
  height: 2rem;
`;
const ContactTextArea = styled.textarea`
  margin: 3rem auto 0;
  width: 65%;
  height: 20rem;
`;

const ContactButton = styled.button`
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  cursor: pointer;
  background: #333;
  color: ${(props) => props.theme.highlightColor};
  border: none;
  border-radius: 6px;
  font-size: 1.6rem;
`;

function Contact() {
  return (
    <PageDiv>
      <TextDiv>
        <Heading>Temporary Contact</Heading>
        <ContactInfoContainer>
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
        </ContactInfoContainer>
      </TextDiv>
      <ContactFormDiv>
        <ContactForm>
          <div>
            <ContactLabel htmlFor="name">Name:</ContactLabel>
            <ContactInput type="text" name="name" id="name" />
          </div>
          <div>
            <ContactLabel htmlFor="email">Email:</ContactLabel>
            <ContactInput type="email" name="email" id="email" />
          </div>
          <div>
            <ContactLabel htmlFor="pronouns">Pronouns:</ContactLabel>
            <ContactSelect type="option" name="pronouns" id="pronouns">
              <option value="they/them">they/them</option>
              <option value="she/her">she/her</option>
              <option value="he/him">he/him</option>
              <option value="other">other (specify in message)</option>
            </ContactSelect>
          </div>
        </ContactForm>
        <ContactTextArea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your message..."
        ></ContactTextArea>
        <ContactButton>Submit</ContactButton>
      </ContactFormDiv>
    </PageDiv>
  );
}

export default Contact;
