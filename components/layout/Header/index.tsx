import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { linkedinUrl, scaleAndTab } from "lib";

import IconLinkedin from "components/Icons/IconLinkedin";

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
                  Raúl de Diego
                </p>
              </motion.div>
            </a>
          </Link>
          <div className="p-d-flex p-ai-center">
            <p
              className="p-mx-2 p-my-0"
              style={{ fontSize: "0.7rem", fontWeight: 600 }}
            >
              contact@rauldediego.com
            </p>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={"Linkedin"}
              className="link-linkedin"
            >
              <IconLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
