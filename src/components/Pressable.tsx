import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type PressableProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function Pressable({ href, children, className, external }: PressableProps) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={className}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </motion.a>
  );
}
