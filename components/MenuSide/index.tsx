import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Accordion, AccordionTab } from "primereact/accordion";

import { stagger } from "lib";

// import { media } from "styles";

const AccordionHeader = styled(motion.article)`
  display: flex;
`;

export function MenuSide({
  categories,
  tags,
  currCategory,
}: {
  categories: any;
  currCategory?: any;
  tags: any;
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <motion.div
        className="menu"
        style={{ minWidth: "10rem" }}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        <Accordion
          activeIndex={activeIndex}
          onTabChange={(e: any) => setActiveIndex(e.index)}
        >
          <AccordionTab
            header={
              <AccordionHeader>
                <i className="pi pi-bookmark p-mr-2"></i>
                <p className="p-text-uppercase p-m-0">categorías</p>
              </AccordionHeader>
            }
          >
            {categories &&
              categories.map(({ id, name, count, slug }: any, i: number) => {
                if (name === "Uncategorized" || count === 0) {
                  return null;
                }
                return (
                  <div key={id} onClick={() => setActiveIndex(null)}>
                    <Link
                      href={{
                        pathname: "/portfolio-categories/[slug]",
                        query: { slug },
                      }}
                    >
                      <a className="lighten">
                        <p
                          className={`p-text-lowercase p-m-0 ${
                            currCategory && currCategory === name
                              ? "p-text-bold"
                              : ""
                          }`}
                          style={{ fontSize: "0.7rem" }}
                        >
                          # {name} ({count})
                        </p>
                      </a>
                    </Link>
                  </div>
                );
              })}
          </AccordionTab>
        </Accordion>

        {/* <p
          className="p-text-uppercase p-mt-4 p-mb-0"
          style={{ fontWeight: 700, marginTop: "1rem" }}
        >
          tools
        </p>
        {tags &&
          tags.map(({ id, name, count, slug }: any) => {
            if (count === 0) return null;
            return (
              <div key={id}>
                <Link
                  href={{
                    pathname: "/portfolio-categories/",
                    // pathname: "/tools/[slug]",
                    // query: { slug },
                  }}
                >
                  <a className="lighten">
                    <p
                      className={`p-text-lowercase p-m-0`}
                      style={{ fontSize: "0.7rem" }}
                    >
                      # {name} ({count})
                    </p>
                  </a>
                </Link>
              </div>
            );
          })} */}
      </motion.div>
    </>
  );
}
