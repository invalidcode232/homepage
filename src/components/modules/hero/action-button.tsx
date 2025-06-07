"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  href: string;
  // text: string;
  children: React.ReactNode;
};

export default function ActionButton(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="block md:inline-block"
    >
      <Button className="w-full mb-2 md:min-w-60 px-8 py-5 bg-slate-600 text-white hover:bg-slate-700 hover:cursor-pointer">
        <Link
          className="font-semibold flex items-center justify-center"
          href={props.href}
        >
          {props.children}
        </Link>
      </Button>
    </motion.div>
  );
}
