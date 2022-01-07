import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { Button } from "primereact/button";

import { useTranslation } from "hooks";

import { about } from "lib";

import {
  HeroContainer,
  HeroContent,
  // BlobContainer,
  Title,
  Subtitle,
  SectionSeparatorContainerUp,
  SectionSeparatorUp,
  SectionSeparatorContainerDown,
  SectionSeparatorDown,
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
      <SectionSeparatorContainerUp>
        <SectionSeparatorUp>
          <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
          >
            <path
              d="M0 154L21.5 151.2C43 148.3 86 142.7 128.8 137.8C171.7 133 214.3 129 257.2 128C300 127 343 129 385.8 133.7C428.7 138.3 471.3 145.7 514.2 146.3C557 147 600 141 642.8 142C685.7 143 728.3 151 771.2 153.2C814 155.3 857 151.7 878.5 149.8L900 148L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#6bb0b2"
            ></path>
            <path
              d="M0 125L21.5 122.2C43 119.3 86 113.7 128.8 112.3C171.7 111 214.3 114 257.2 115C300 116 343 115 385.8 111.8C428.7 108.7 471.3 103.3 514.2 101.5C557 99.7 600 101.3 642.8 101.5C685.7 101.7 728.3 100.3 771.2 98.2C814 96 857 93 878.5 91.5L900 90L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#8fbfbb"
            ></path>
            <path
              d="M0 60L21.5 60.7C43 61.3 86 62.7 128.8 61C171.7 59.3 214.3 54.7 257.2 51.5C300 48.3 343 46.7 385.8 48.3C428.7 50 471.3 55 514.2 59.8C557 64.7 600 69.3 642.8 70.7C685.7 72 728.3 70 771.2 68.3C814 66.7 857 65.3 878.5 64.7L900 64L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#b0cec7"
            ></path>
          </svg>
        </SectionSeparatorUp>
      </SectionSeparatorContainerUp>

      <HeroContainer>
        {isMounted && (
          <HeroContent ref={nodeRef}>
            {/* <BlobContainer>
                    <Blob />
                  </BlobContainer> */}

            <motion.div variants={stagger}>
              <Title variants={fadeIn}>{about?.position?.[locale]}</Title>
              <Subtitle variants={fadeIn}>
                {about?.positionDescription?.[locale]}
              </Subtitle>
              <Button
                label={t("contact")}
                onClick={() => router.push("/about")}
                className="p-button-raised p-button-rounded"
              />
            </motion.div>
          </HeroContent>
        )}
      </HeroContainer>

      <SectionSeparatorContainerDown>
        <SectionSeparatorDown>
          <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
          >
            <path
              d="M0 444L21.5 446.8C43 449.7 86 455.3 128.8 460.2C171.7 465 214.3 469 257.2 470C300 471 343 469 385.8 464.3C428.7 459.7 471.3 452.3 514.2 451.7C557 451 600 457 642.8 456C685.7 455 728.3 447 771.2 444.8C814 442.7 857 446.3 878.5 448.2L900 450L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#6bb0b2"
            ></path>
            <path
              d="M0 473L21.5 475.8C43 478.7 86 484.3 128.8 485.7C171.7 487 214.3 484 257.2 483C300 482 343 483 385.8 486.2C428.7 489.3 471.3 494.7 514.2 496.5C557 498.3 600 496.7 642.8 496.5C685.7 496.3 728.3 497.7 771.2 499.8C814 502 857 505 878.5 506.5L900 508L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#8fbfbb"
            ></path>
            <path
              d="M0 538L21.5 537.3C43 536.7 86 535.3 128.8 537C171.7 538.7 214.3 543.3 257.2 546.5C300 549.7 343 551.3 385.8 549.7C428.7 548 471.3 543 514.2 538.2C557 533.3 600 528.7 642.8 527.3C685.7 526 728.3 528 771.2 529.7C814 531.3 857 532.7 878.5 533.3L900 534L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#b0cec7"
            ></path>
          </svg>
        </SectionSeparatorDown>
      </SectionSeparatorContainerDown>

      <SectionSeparatorContainerUp>
        <SectionSeparatorUp height="30rem">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
          >
            <path
              d="M0 154L21.5 151.2C43 148.3 86 142.7 128.8 137.8C171.7 133 214.3 129 257.2 128C300 127 343 129 385.8 133.7C428.7 138.3 471.3 145.7 514.2 146.3C557 147 600 141 642.8 142C685.7 143 728.3 151 771.2 153.2C814 155.3 857 151.7 878.5 149.8L900 148L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#6bb0b2"
            ></path>
            <path
              d="M0 125L21.5 122.2C43 119.3 86 113.7 128.8 112.3C171.7 111 214.3 114 257.2 115C300 116 343 115 385.8 111.8C428.7 108.7 471.3 103.3 514.2 101.5C557 99.7 600 101.3 642.8 101.5C685.7 101.7 728.3 100.3 771.2 98.2C814 96 857 93 878.5 91.5L900 90L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#8fbfbb"
            ></path>
            <path
              d="M0 60L21.5 60.7C43 61.3 86 62.7 128.8 61C171.7 59.3 214.3 54.7 257.2 51.5C300 48.3 343 46.7 385.8 48.3C428.7 50 471.3 55 514.2 59.8C557 64.7 600 69.3 642.8 70.7C685.7 72 728.3 70 771.2 68.3C814 66.7 857 65.3 878.5 64.7L900 64L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#b0cec7"
            ></path>
          </svg>
        </SectionSeparatorUp>
      </SectionSeparatorContainerUp>
    </>
  );
}
