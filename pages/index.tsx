import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import UnderConstruction from "../components/UnderConstruction";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raúl de Diego</title>
        <meta name="description" content="Raúl de Diego Porfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>RAÚL DE DIEGO</h3>
        <div style={{ width: "80%", padding: "2rem 2rem" }}>
          <UnderConstruction />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>All rights reserved @ 2021</p>
      </footer>
    </div>
  );
};

export default Home;
