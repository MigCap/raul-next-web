import { useState } from "react";

import Head from "next/head";

import { motion } from "framer-motion";
import styled from "styled-components";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

import { about } from "lib";

import { theme, Section } from "styles";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Head>
        <title>{about.name} Contact</title>
        <meta name="description" content={`${about.name} Contact`} />
      </Head>

      <Section>
        <ContactContainer
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <FormContainer>
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              assumenda velit sint, natus non expedita repudiandae beatae labore
              earum nobis! Illum amet atque libero ducimus repudiandae laborum
              suscipit eligendi laudantium. ipsum dolor sit amet consectetur
              adipisicing elit. Sunt illum nisi dolores tenetur et. Dolor
              inventore, quas voluptates culpa possimus dolorum quis, cupiditate
              temporibus sit exercitationem optio explicabo assumenda dolorem.
            </p>

            <FieldWrapper>
              <span className="p-float-label">
                <InputText
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Name</label>
              </span>
            </FieldWrapper>

            <FieldWrapper>
              <span className="p-float-label">
                <InputText
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </span>
            </FieldWrapper>

            <FieldWrapper>
              <span className="p-float-label">
                <InputTextarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  cols={30}
                  autoResize
                />
                <label htmlFor="message">Message</label>
              </span>
            </FieldWrapper>

            <Button
              label="Enviar"
              className="p-button-raised p-button-rounded p-mt-3"
              style={{ width: "100%" }}
            />
          </FormContainer>
        </ContactContainer>
      </Section>
    </>
  );
}

const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  h1,
  h3,
  p {
    color: ${theme.colors.teal};
  }
`;
const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  margin: 0 auto;

  label {
    align-self: flex-start;
  }

  span,
  textarea,
  input {
    width: 100%;
  }
`;
const FieldWrapper = styled(motion.div)`
  margin: 1.5rem 0;
  width: 100%;
`;
