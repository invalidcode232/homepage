"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NavLink from "./nav-link";

const navLinks = [
  { href: "/terminal", text: "Terminal" },
  { href: "/projects", text: "Projects" },
];

export default function Header() {
  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.header
      className="w-full flex justify-between items-center mb-10 text-white"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className="text-3xl inline-block align-middle"
        variants={logoVariants}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Link href="/">James Sungarda</Link>
      </motion.span>

      <motion.nav variants={navVariants} className="space-x-0">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} text={link.text} />
        ))}
      </motion.nav>
    </motion.header>
  );
}
