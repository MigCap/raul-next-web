import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { about, socialLinks, routesConfig, scaleAndTab } from "lib";

import { useWindowSizeSinListener } from "hooks/useWindowSize";

export default function Header() {
  return (
    <header className="container header">
      <motion.div
        className="p-py-3"
        style={{
          width: "100%",
          // background: "#fff",
        }}
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        initial="initial"
      >
        <div className="p-d-flex p-ai-center p-jc-between">
          <Link href="/">
            <a>
              <motion.div
                className="p-d-flex p-ai-center"
                variants={scaleAndTab}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src={`/assets/logo-raul.png`}
                    alt={`logo-raul`}
                    width={25}
                    height={25}
                  />
                </div>
                <p
                  className="p-text-uppercase p-my-0 p-mx-2"
                  style={{ fontWeight: 700 }}
                >
                  {about.name}
                </p>
              </motion.div>
            </a>
          </Link>

          <NavBar />
        </div>
      </motion.div>
    </header>
  );
}

function NavBar(props: any) {
  // const { windowSize, isXLarge, isLarge, isMedium, isSmall } =
  //   useWindowSizeSinListener();

  return (
    <nav>
      <ul className={`p-d-flex`}>
        {routesConfig.map(({ name, path }) => {
          return (
            <li
              key={name}
              className="p-text-uppercase p-text-bold p-ml-3"
              style={{ fontSize: "0.7rem" }}
            >
              <Link
                href={{
                  pathname: path,
                }}
              >
                <a className="lighten">
                  <span>{name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="p-d-flex p-ai-center p-jc-end">
        <div className="p-d-flex p-ai-center">
          <Link href="/">
            <a className="lighten">
              <p
                className="p-m-0"
                style={{ fontSize: "0.6rem", fontWeight: 600 }}
              >
                {about.contactMail}
              </p>
            </a>
          </Link>
          {/* <a
                  href={socialLinks?.linkedin?.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={"Linkedin"}
                  className="link-linkedin p-ml-2 lighten"
                >
                  {socialLinks?.linkedin?.Icon}
                </a> */}
        </div>
      </div>
    </nav>
  );
}

// const navBarAnimation = {
//   initial: {
//     opacity: 0,
//     y: -100,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//   },
//   exit: {
//     opacity: 0,
//     y: -100,
//   },
// };
