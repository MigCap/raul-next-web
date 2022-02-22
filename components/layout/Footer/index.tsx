import {
  useContactForm,
  useCustomRouter as useRouter,
  useTranslation,
} from "hooks";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

import { locales as localesConfig, routesConfig as navLinks } from "lib";

import {
  FooterContainer,
  Copyright,
  ContentContainer,
  FormContainer,
  FieldWrapper,
  GeneralContainer,
  NavListItem,
  NavLink,
  By,
} from "./styles";

export default function Footer() {
  const {
    router: { locale },
  } = useRouter();

  const { t } = useTranslation({});

  const { contactState, setFieldValue, sendContactInfo } = useContactForm();

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Copyright>
        Copyright 2014-{currentYear} – Raúl de Diego . All rights reserved
      </Copyright>
      <Copyright>
        The parcial o total reproduction of the designs, ideas or content
        without the consent of the author will be reported to the legal
        authorities.
      </Copyright>

      <ContentContainer>
        <FormContainer>
          <h3>Contact: </h3>
          <FieldWrapper>
            <span className="">
              <InputText
                id="name"
                name="name"
                placeholder={t("name")}
                value={contactState["name"]}
                onChange={setFieldValue}
              />
            </span>
          </FieldWrapper>
          <FieldWrapper>
            <span className="">
              <InputText
                type="email"
                id="email"
                name="email"
                placeholder={t("email")}
                value={contactState["email"]}
                onChange={setFieldValue}
              />
            </span>
          </FieldWrapper>
          <FieldWrapper>
            <span className="">
              <InputTextarea
                id="message"
                name="message"
                placeholder={t("message")}
                value={contactState["message"]}
                onChange={setFieldValue}
                rows={5}
                cols={30}
                autoResize
              />
            </span>
          </FieldWrapper>
          <Button
            label={t("contactMe")}
            className="p-button-raised"
            onClick={sendContactInfo}
          />
        </FormContainer>

        <GeneralContainer>
          <h3>General: </h3>
          <ol>
            {navLinks &&
              navLinks.map((route: any, i: number) => {
                const { path, name, id } = route;
                return (
                  <NavListItem key={i + id}>
                    <NavLink href={path}>
                      <a>
                        <p>{name[locale || localesConfig[0]]}</p>
                      </a>
                    </NavLink>
                  </NavListItem>
                );
              })}
          </ol>
          <By>
            Develop by
            <a
              href="https://miguelcapellan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={"footer-author"}> MCV</span>
            </a>
          </By>
        </GeneralContainer>
      </ContentContainer>
    </FooterContainer>
  );
}
