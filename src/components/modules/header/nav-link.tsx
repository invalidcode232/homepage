"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  href: string;
  text: string;
  isExternal?: boolean;
  hideMobile?: boolean;
};

export default function NavigationLink(props: Props) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <motion.div
        whileHover={{
          y: -2,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
      >
        <Link
          href={props.href}
          className={`text-blue-400 hover:underline mx-2 hover:cursor-pointer transition-colors duration-200 ${
            props.hideMobile ? "hidden lg:inline-block" : ""
          }`}
          {...(props.isExternal && { target: "_blank" })}
        >
          {props.text}
        </Link>
      </motion.div>
    </motion.span>
  );
}
