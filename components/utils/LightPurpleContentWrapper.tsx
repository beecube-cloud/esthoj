"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; 

type SectionVariant = "primary" | "secondary" | "light" | "transparent";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
  animate?: boolean;
}

const variantStyles: Record<SectionVariant, string> = {
  primary: "bg-[var(--color-esthoj-primary)] text-white",
  secondary: "bg-[var(--color-esthoj-secondary)] text-white",
  light: "bg-white text-black shadow-sm",
  transparent: "bg-transparent",
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className,
  variant = "primary",
  animate = true,
}) => {
  const SectionElement = animate ? motion.section : "section";

  return (
    <SectionElement
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "py-16 px-4 sm:px-6 lg:px-8 mx-3 rounded-3xl mb-4",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </SectionElement>
  );
};
