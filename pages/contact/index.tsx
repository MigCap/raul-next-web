import { useState } from "react";

import Head from "next/head";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

import { useTranslation, useContactForm } from "hooks";

import { about } from "lib";

import {
  Section,
  ContactContainer,
  FormContainer,
  FieldWrapper,
} from "styles/contact";

export default function ContactPage() {
  const { t } = useTranslation({});

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
            <p>{t("contactDescription")}</p>
            <ContactForm />
          </FormContainer>
        </ContactContainer>
      </Section>
    </>
  );
}

export function ContactForm() {
  const { contactState, setFieldValue, sendContactInfo } = useContactForm();

  const { t } = useTranslation({});

  return (
    <>
      <FieldWrapper>
        <span className="p-float-label">
          <InputText
            id="name"
            name="name"
            value={contactState["name"]}
            onChange={setFieldValue}
          />
          <label htmlFor="name">{t("name")}</label>
        </span>
      </FieldWrapper>

      <FieldWrapper>
        <span className="p-float-label">
          <InputText
            id="email"
            name="email"
            type="email"
            value={contactState["email"]}
            onChange={setFieldValue}
          />
          <label htmlFor="email">{t("email")}</label>
        </span>
      </FieldWrapper>

      <FieldWrapper>
        <span className="p-float-label">
          <InputTextarea
            id="message"
            name="message"
            value={contactState["message"]}
            onChange={setFieldValue}
            rows={5}
            cols={30}
            autoResize
          />
          <label htmlFor="message">{t("message")}</label>
        </span>
      </FieldWrapper>

      <Button
        label={t("contactMe")}
        className="p-button-raised p-mt-3"
        style={{ alignSelf: "start", padding: "0.25rem 1.25rem" }}
        onClick={sendContactInfo}
      />
    </>
  );
}
