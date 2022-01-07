import { useState } from "react";

import Head from "next/head";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

import { useTranslation } from "hooks";

import { about } from "lib";

import {
  Section,
  ContactContainer,
  FormContainer,
  FieldWrapper,
} from "./styles";
import { locale } from "./locale";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation({ localeFile: locale });

  return (
    <>
      <Head>
        <title>
          {about.name} {t("title")}
        </title>
        <meta name="description" content={`${about.name} ${t("title")}`} />
      </Head>

      <Section>
        <ContactContainer
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <FormContainer>
            <h3>{t("title")}</h3>
            <p>{t("description")}</p>

            <FieldWrapper>
              <span className="p-float-label">
                <InputText
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">{t("name")}</label>
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
                <label htmlFor="email">{t("email")}</label>
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
                <label htmlFor="message">{t("message")}</label>
              </span>
            </FieldWrapper>

            <Button
              label={t("send")}
              className="p-button-raised p-button-rounded p-mt-3"
              style={{ width: "100%" }}
            />
          </FormContainer>
        </ContactContainer>
      </Section>
    </>
  );
}
