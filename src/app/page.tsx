"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ActionButton from "@/components/modules/home/action-button";
import { DownloadIcon, MailIcon } from "lucide-react";
import ContactsList from "@/components/modules/home/contacts-list";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* Greeting Section */}
      <motion.section
        variants={itemVariants}
        className="mb-2"
        aria-label="greeting"
      >
        <motion.h1
          className="text-3xl font-semibold inline-block mr-3"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          Hello!
        </motion.h1>
        <motion.h2
          className="text-md mb-2 text-gray-400 inline-block"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Halo / 你好 / こんにちは
        </motion.h2>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        variants={itemVariants}
        className="mb-4 lg:max-w-[75%]"
        aria-label="introduction"
      >
        <motion.p
          className="mb-4 md:mb-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          I am currently a first year undergraduate student studying Computer
          Science at
          <motion.a
            href={"https://hku.hk"}
            className="text-blue-400 no-underline hover:underline ml-1"
            target="_blank"
            whileHover={{
              scale: 1.05,
              color: "#60a5fa",
              transition: { duration: 0.2 },
            }}
          >
            The University of Hong Kong
          </motion.a>
          .
        </motion.p>

        <motion.p
          className="mb-4 md:mb-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          I am interested in all things software development, including machine
          learning, artificial intelligence, and web development.
        </motion.p>

        <motion.p
          className="mb-4 md:mb-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          Want to know more about me? Check out my{" "}
          <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
            <Link
              href="/terminal"
              className="text-blue-400 hover:underline no-underline"
            >
              interactive terminal
            </Link>
          </motion.span>
          .
        </motion.p>
      </motion.section>

      {/* Action Buttons Section */}
      <motion.section
        variants={itemVariants}
        aria-label="action buttons"
        className="md:flex md:items-center mb-4"
      >
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
        >
          <ActionButton href="https://github.com/invalidcode232/invalidcode232.github.io/raw/refs/heads/main/public/cv.pdf">
            <DownloadIcon className="mr-2 inline-block" />
            Download CV
          </ActionButton>
        </motion.div>

        <motion.span
          className="text-gray-500 md:mx-4 md:block hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
        >
          or
        </motion.span>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
        >
          <ActionButton href="mailto:james.sungarda@gmail.com">
            <MailIcon className="mr-2 inline-block" />
            Email Me
          </ActionButton>
        </motion.div>
      </motion.section>

      {/* Contacts Section */}
      <motion.section variants={itemVariants} aria-label="contacts">
        <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.3 }}
        >
          <ContactsList />
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
