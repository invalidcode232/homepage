"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  text: string;
  isExternal?: boolean;
  hideMobile?: boolean;
  icon?: React.ElementType;
};

export default function NavigationLink(props: Props) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

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
          className={`flex items-center text-blue-300 hover:text-blue-400 mx-2 hover:cursor-pointer transition-colors duration-200 ${
            props.hideMobile ? "hidden lg:inline-block" : ""
          } ${
            isActive
              ? "underline underline-offset-4 decoration-blue-300 decoration-2"
              : ""
          }`}
          {...(props.isExternal && { target: "_blank" })}
        >
          {props.icon && <props.icon className="mr-1 h-4" />}
          {props.text}
        </Link>
      </motion.div>
    </motion.span>
  );
}
