import Link from "next/link";

import { motion } from "framer-motion";

import { fadeInUp } from "lib";

export default function WorkCategories({
  postCategories,
}: {
  postCategories: any;
}) {
  if (!postCategories || postCategories?.length <= 0) return null;

  return (
    <motion.div className="p-col-12 p-mt-2 p-mt-md-6 p-p-0" variants={fadeInUp}>
      <h2 className="p-my-2" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
        CATEGORIES
      </h2>

      <div className="p-d-flex p-flex-wrap p-jc-cener p-ai-start">
        {postCategories?.map(({ id, name, count, slug }: any, i: number) => {
          if (name === "Uncategorized" || count === 0) {
            return null;
          }
          return (
            <Link
              href={{
                pathname: "/categories/[slug]",
                query: { slug },
              }}
              key={id}
            >
              <a className="lighten">
                <p
                  className="p-my-0 p-mr-2 p-text-bold"
                  // style={{ fontSize: "0.7rem" }}
                >
                  #{name.toLowerCase()}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
