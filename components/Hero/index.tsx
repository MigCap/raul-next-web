import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { Button } from "primereact/button";

import { useTranslation } from "hooks";

import { about, getRoutePathById, ROUTES_IDS } from "lib";

import {
  HeroContainer,
  HeroContent,
  ButtonsContainer,
  Title,
  Subtitle,
} from "./styles";

const stagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function Hero() {
  const router = useRouter();
  const { locale, t } = useTranslation({});

  const [isMounted, setIsMounted] = useState<any>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const nodeRef = useRef(null);

  return (
    <>
      <HeroContainer margin="0" maxWidth="100%">
        {isMounted && (
          <HeroContent ref={nodeRef}>
            <motion.div variants={stagger}>
              <Title variants={fadeIn}>{t("welcomeToMyWork")}</Title>
              <Subtitle variants={fadeIn}>{about?.position?.[locale]}</Subtitle>
              <ButtonsContainer>
                <Button
                  label={t("whoIAm")}
                  onClick={() =>
                    router.push(getRoutePathById(ROUTES_IDS.ABOUT))
                  }
                  className="p-button-primary"
                />
                <Button
                  label={t("myServices")}
                  onClick={() =>
                    router.push(getRoutePathById(ROUTES_IDS.PORTFOLIO))
                  }
                  className="p-button-primary"
                />
                <Button
                  label={t("letsTalk")}
                  onClick={() =>
                    router.push(getRoutePathById(ROUTES_IDS.CONTACT))
                  }
                  className="p-button-primary"
                />
              </ButtonsContainer>
            </motion.div>
          </HeroContent>
        )}
      </HeroContainer>
    </>
  );
}
