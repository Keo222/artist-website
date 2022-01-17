import React, { useState } from "react";
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
  padding-bottom: 3rem;
`;

const ContactText = styled(ParagraphText)`
  margin-bottom: 0;
`;

const ContactFormDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
`;

const ContactForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  @media screen and (${(props) => props.theme.md}) {
    flex-direction: column;
  }
`;

const InputGrouping = styled.div`
  display: flex;
  margin: 0 2rem;
  @media screen and (${(props) => props.theme.md}) {
    margin: 2rem 0;
    flex-direction: column;
    text-align: initial;
  }
`;

const ContactLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 1rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.highlightColor};
`;
const ContactInput = styled.input`
  height: 2rem;
  max-width: 30ch;
  border: none;
  border-radius: 3px;
  background: #eee;

  &:focus {
    outline: 2px solid yellowgreen;
    box-shadow: 0 3px 8px 5px rgba(0, 0, 0, 0.2);
  }
`;
const ContactSelect = styled.select`
  font-size: 1.4rem;
  height: 2.5rem;
  border-radius: 3px;
  background: #eee;

  &:focus {
    outline: 2px solid yellowgreen;
    box-shadow: 0 3px 8px 5px rgba(0, 0, 0, 0.2);
  }

  @media screen and (${(props) => props.theme.md}) {
    width: 25ch;
  }
`;
const ContactTextArea = styled.textarea`
  margin: 3rem auto 0;
  width: 100%;
  height: 20rem;
  font-size: 1.6rem;
  font-family: inherit;
  border: none;
  border-radius: 3px;

  &:focus {
    outline: 3px solid yellowgreen;
    /* box-shadow: 0 3px 8px 5px rgba(0, 0, 0, 0.2); */
  }
`;

const ContactButton = styled.button`
  margin: 2rem auto 0;
  padding: 1.2rem 4rem;
  cursor: pointer;
  background: ${(props) => props.theme.highlightColor};
  color: #222;
  border: none;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.2s;
  &:hover {
    background: #222;
    color: ${(props) => props.theme.highlightColor};
  }
`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <PageDiv>
      <TextDiv>
        <Heading>Contact</Heading>
        <ContactInfoContainer>
          <ContactText>
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
          </ContactText>
        </ContactInfoContainer>

        <ContactFormDiv>
          <ContactForm>
            <InputGrouping>
              <ContactLabel htmlFor="name">Name:</ContactLabel>
              <ContactInput
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputGrouping>
            <InputGrouping>
              <ContactLabel htmlFor="email">Email:</ContactLabel>
              <ContactInput
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </InputGrouping>
            <InputGrouping>
              <ContactLabel htmlFor="pronouns">Pronouns:</ContactLabel>
              <ContactSelect type="option" name="pronouns" id="pronouns">
                <option value="they/them">they/them</option>
                <option value="she/her">she/her</option>
                <option value="he/him">he/him</option>
                <option value="other">other (specify in message)</option>
              </ContactSelect>
            </InputGrouping>
          </ContactForm>
          <ContactTextArea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message..."
          ></ContactTextArea>
          <div
            class="g-recaptcha"
            data-sitekey="6LfgQBkeAAAAACbqIC6FblAtii250qaqWMcPWrbe"
          ></div>
          <ContactButton type="submit">Submit</ContactButton>
        </ContactFormDiv>
      </TextDiv>
    </PageDiv>
  );
}

export default Contact;
