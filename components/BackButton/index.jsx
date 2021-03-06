import React from "react";
import NextLink from "next/link";
import {motion} from "framer-motion"
function BackButton({ href }) {
  return (
    <NextLink href={href}>
      <motion.svg
        width="160"
        height="23"
        viewBox="0 0 160 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{cursor:'pointer'}}
        whileHover={{ scale: 1.1 }}
      >
        <path
          d="M0.932618 10.9272C0.350491 11.5167 0.356427 12.4664 0.945876 13.0485L10.5513 22.5346C11.1407 23.1167 12.0904 23.1108 12.6726 22.5214C13.2547 21.9319 13.2487 20.9822 12.6593 20.4001L4.12116 11.968L12.5532 3.42985C13.1354 2.84041 13.1294 1.89068 12.54 1.30857C11.9505 0.726452 11.0008 0.732388 10.4187 1.32182L0.932618 10.9272ZM158.991 9.50003L1.99051 10.4813L2.00926 13.4812L159.009 12.5L158.991 9.50003Z"
          fill="white"
        />
      </motion.svg>
    </NextLink>
  );
}

export default BackButton;
