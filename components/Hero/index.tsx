// import Image from "next/

import { about } from "lib";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section
        className={`p-d-flex p-flex-column p-ai-center p-jc-center ${styles["hero-container"]}`}
        // style={
        //   {
        //     margin: "5rem 0",
        //   }
        // }
      >
        <div className="p-mx-2 p-md-mx-6 p-text-center">
          <h1 className="p-text-uppercase">{about.position}</h1>
          <h2 className="p-m-0">{about.positionDescription}</h2>
        </div>
      </section>
    </>
  );
}
