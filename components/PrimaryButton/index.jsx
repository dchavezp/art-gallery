import React from "react";
import Link from "next/link";
import styles from "./button.module.css";
import { motion } from "framer-motion";
function Button({ children, primary, href, action }) {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={primary ? styles.container : styles.containerSecondary}
              onClick={action}
            >
              {children}
            </motion.div>
          </a>
        </Link>
      ) : (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={primary ? styles.container : styles.containerSecondary}
          onClick={action}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

export default Button;
