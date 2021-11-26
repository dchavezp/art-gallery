import React from "react";
import NextLink from "next/link";
import styles from "./link.module.css";
function Link({ text, href }) {
  return (
    <div className={styles.container}>
      <NextLink href={href}>
        <a>{text}</a>
      </NextLink>
    </div>
  );
}

export default Link;
