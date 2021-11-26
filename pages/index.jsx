import React, { useState, useEffect } from "react";

import Image from "next/image";
import Head from "next/head";
import styles from "../styles/home.module.css";
import Button from "../components/PrimaryButton";
import Link from "../components/Link";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Head>
        <title>Unidos por el arte</title>
        <meta
          name="description"
          content="Galeria Virtual de Unidos por el arte"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/ico.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/ico.png" />
      </Head>
      <motion.div
        className={styles.mainContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}>
          <div>
            <Image
              className={styles.sponsor}
              src="/images/sponsor.png"
              width={56}
              height={72}
              alt="sponsor"
            />
            <h4>Bienvenidos</h4>
            <h1>1er Festival de Arte Virtual</h1>
            <h3>&quot;Unidos por el Arte&quot;</h3>
            <h2>2021</h2>
            <div className={styles.mainActions}>
              <Button primary href="/gallery">
                {" "}
                Ir a Galeria
              </Button>
              <Button href="/instructions">Ver Instrucciones</Button>
              <Link text="Créditos" href="/credits" />
            </div>
          </div>
          <div className={styles.rectDec1} />
          <div className={styles.rectDec2} />
          <div className={styles.rectDec3} />
        </div>
      </motion.div>
    </>
  );
}
