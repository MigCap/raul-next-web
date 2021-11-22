// import Image from "next/

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div
        className={`p-d-flex p-flex-column p-ai-center p-jc-center ${styles["hero-container"]}`}
        style={
          {
            // marginTop: "5rem",
            // marginBottom: "5rem",
          }
        }
      >
        <h1 className="p-text-uppercase">
          Diseñador Gráfico Senior e Ilustrador
        </h1>
        <h2 className="p-m-0">Artefinalista y Director de Arte</h2>
      </div>
    </>
  );
}
