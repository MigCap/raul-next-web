import Link from "next/link";

import { motion } from "framer-motion";

import { stagger } from "lib";

// import styles from "./MenuSide.module.css";

export function MenuSide({
  categories,
  currCategory,
  tags,
}: {
  categories: any;
  currCategory?: any;
  tags: any;
}) {
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
        <p className="p-text-uppercase p-m-0" style={{ fontWeight: 700 }}>
          categories
        </p>
        {categories &&
          categories.map(({ id, name, count, slug }: any) => {
            if (name === "Uncategorized" || count === 0) {
              return null;
            }
            return (
              <div key={id}>
                <Link
                  href={{
                    pathname: "/categories/[slug]",
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

        <p
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
                    pathname: "/categories",
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
          })}
      </motion.div>
    </>
  );
}
