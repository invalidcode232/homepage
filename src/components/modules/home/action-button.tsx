"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  href: string;
  // text: string;
  children: React.ReactNode;
  // isExternal?: boolean;
};

export default function ActionButton(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { duration: 0.15 },
      }}
      whileTap={{ scale: 0.98 }}
      className="block md:inline-block"
    >
      <motion.div
        whileHover={{
          boxShadow: "0 8px 20px rgba(59, 130, 246, 0.12)",
          transition: { duration: 0.2 },
        }}
      >
        <Button className="w-full mb-2 md:min-w-60 px-8 py-5 bg-slate-600 text-white hover:bg-slate-700 hover:cursor-pointer transition-all duration-200">
          <Link
            className="font-semibold flex items-center justify-center"
            href={props.href}
            // {...(props.isExternal && { target: "_blank" })}
          >
            <motion.div
              className="flex items-center justify-center"
              whileHover={{
                x: 1,
                transition: { duration: 0.15 },
              }}
            >
              {props.children}
            </motion.div>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
