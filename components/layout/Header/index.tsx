import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="container">
      <motion.div
        className="p-py-3"
        style={{
          width: "100%",
          // background: "#fff",
        }}
      >
        <div className="p-d-flex p-ai-center p-jc-between">
          <Link href="/">
            <a>
              <div className="p-d-flex p-ai-center">
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
              </div>
            </a>
          </Link>
          <p
            className="p-text-uppercase p-m-0"
            style={{ fontSize: "0.6rem", fontWeight: 600 }}
          >
            rauldediego@rauldediego.com
          </p>
        </div>
      </motion.div>
    </header>
  );
}
