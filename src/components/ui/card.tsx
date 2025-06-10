import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useState, useRef } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

function Card({
  className,
  index = 0,
  ...props
}: React.ComponentProps<"div"> & { index?: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
    >
      <div
        data-slot="card"
        className={cn(
          "rounded-xl border py-6 shadow-sm relative overflow-hidden h-full",
          className
        )}
        {...props}
      >
        {/* Mouse-tracking border effect */}
        <div
          className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `conic-gradient(from 0deg at ${mousePosition.x}px ${mousePosition.y}px, 
            transparent 0deg, 
            rgba(59, 130, 246, 0.4) 30deg, 
            transparent 60deg, 
            transparent 300deg, 
            rgba(59, 130, 246, 0.4) 330deg, 
            transparent 360deg)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* Content wrapper to ensure proper z-index */}
        <div
          className="relative z-10 h-full gap-6"
          style={{ display: "inherit", flexDirection: "inherit" }}
        >
          {props.children}
        </div>
      </div>
    </motion.div>
  );
}

function CardHeader({
  className,
  ...props
}: Omit<HTMLMotionProps<"div">, "children"> & { children?: React.ReactNode }) {
  return (
    <motion.div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: Omit<HTMLMotionProps<"div">, "children"> & { children?: React.ReactNode }) {
  return (
    <motion.div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: Omit<HTMLMotionProps<"div">, "children"> & { children?: React.ReactNode }) {
  return (
    <motion.div
      data-slot="card-description"
      className={cn("text-sm", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      {...props}
    />
  );
}

function CardAction({
  className,
  href,
  ...props
}: Omit<HTMLMotionProps<"div">, "children"> & {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <motion.div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      {...props}
    >
      <Link
        href={href}
        className="flex items-center transition-colors duration-150"
      >
        <span>{props.children}</span>
        <motion.svg
          className="w-4 h-4 ml-1 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          variants={{
            hover: { x: 4 },
          }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </motion.svg>
      </Link>
    </motion.div>
  );
}

function CardContent({
  className,
  ...props
}: Omit<HTMLMotionProps<"div">, "children"> & { children?: React.ReactNode }) {
  return (
    <motion.div
      data-slot="card-content"
      className={cn("px-6", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: Omit<HTMLMotionProps<"div">, "children"> & { children?: React.ReactNode }) {
  return (
    <motion.div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
