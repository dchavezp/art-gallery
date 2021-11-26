import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/PrimaryButton";
import styles from "./instructions.module.css";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import { Icon } from "@iconify/react";

function InstructionsPage() {
  //true -> Spanish / false: English
  const [language, setLanguage] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <div className={language ? styles.stutorial : styles.etutorial}></div>
      <div className={styles.backAction}>
        <BackButton href="/" />
      </div>
      <div
        onClick={() => {
          setLanguage(!language);
        }}
        className={styles.changeLanguage}
      >
        <Icon
          icon={
            language
              ? "emojione:flag-for-peru"
              : "emojione:flag-for-united-states"
          }
        />
        <span>{language ? "Español" : "English"}</span>
      </div>
    </motion.div>
  );
}

export default InstructionsPage;
