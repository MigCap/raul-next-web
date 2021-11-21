import { motion } from "framer-motion";

import { fadeInUp } from "lib";

export default function PostCategories({
  postCategories,
}: {
  postCategories: any;
}) {
  if (!postCategories || postCategories?.length <= 0) return null;

  return (
    <motion.div className="p-col-12 p-mt-2 p-mt-md-6 p-p-0" variants={fadeInUp}>
      <div className="p-d-flex p-flex-wrap p-jc-cener p-ai-start">
        {postCategories?.map(({ id, name }: any, i: number) => {
          return (
            <p
              key={id}
              className="p-my-0 p-mr-2 p-text-bold"
              // style={{ fontSize: "0.7rem" }}
            >
              #{name.toLowerCase()}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}
