// import { useRef } from "react";

import Link from "next/link";

import { motion, useCycle } from "framer-motion";

import { scaleAndTab, stagger } from "lib";

// import { MenuToggle } from "./MenuToggle";
// import { Navigation } from "./Navigation";

import { useDimensions } from "./use-dimensions";

// import styles from "./Menu.module.css";

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

export const Menu = ({ categories, currCategory }: any) => {
  // const [isOpen, toggleOpen] = useCycle(false, true);

  // const containerRef = useRef(null);

  // const { height } = useDimensions(containerRef);

  // useEffect(() => {
  //   toggleOpen();
  // }, []);

  // let items: any = [];
  // categories &&
  //   categories.forEach((category: any) => {
  //     if (category.name === "Uncategorized" || category.count === 0) {
  //       return;
  //     } else {
  //       items.push({
  //         label: category?.name || "",
  //         // items: [
  //         //   {
  //         //     label: category?.name || "",
  //         //     icon: "pi pi-refresh",
  //         //     command: () => {
  //         //         toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
  //         //     }
  //         //   },
  //         // ],
  //       });
  //     }
  //   });

  return (
    <div>
      <motion.div
        className="menu"
        style={{ minWidth: "10rem" }}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        {/* <div className="p-mt-6 p-d-pt-6"> */}
        <p className="p-text-uppercase p-m-0" style={{ fontWeight: 700 }}>
          Categories
        </p>

        {/* <Menu model={items} /> */}

        {categories &&
          categories.map(({ id, name, count, slug }: any) => {
            if (name === "Uncategorized" || count === 0) {
              return null;
            }
            return (
              <motion.div key={id} variants={scaleAndTab}>
                <Link
                  href={{
                    pathname: "/categories/[slug]",
                    query: { slug },
                  }}
                >
                  <a>
                    <p
                      className={`p-text-lowercase p-m-0 ${
                        currCategory && currCategory === name
                          ? "p-text-bold"
                          : ""
                      }`}
                      style={{ fontSize: "0.7rem" }}
                    >
                      # {name}
                    </p>
                  </a>
                </Link>
              </motion.div>
            );
          })}
      </motion.div>

      {/* <motion.nav
        className={styles.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={toggleOpen} />
      </motion.nav> */}
    </div>
  );
};
