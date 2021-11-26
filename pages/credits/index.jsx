import React from "react";
import { motion } from "framer-motion";
import BackButton from "../../components/BackButton";
import Image from "next/image";
import styles from "./credits.module.css";
function CreditsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <h1>Créditos/Credits</h1>
      <h2>
        Diseño y elaboracion de la Galeria Virtual/Design and development of the
        Virtual Gallery
      </h2>
      <div className={styles.userCredit}>
        <Image
          width={100}
          height={100}
          src="/images/photo.jpg"
          alt="dewittchavez"
          className={styles.image}
        ></Image>
        <h3>Dewitt Scott Chavez Ponce</h3>
        <h4>Ingeniero de Software/Software Engineer</h4>
        <h4>Diseñador de Interfaces/User Interface Designer</h4>
      </div>
      <div className={styles.backButton}>
        <BackButton href="/" />
      </div>
    </motion.div>
  );
}

export default CreditsPage;
