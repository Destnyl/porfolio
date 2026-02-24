import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: "lift" | "scale" | "glow" | "rotate";
  glowColor?: "primary" | "secondary" | "emerald";
  delay?: number;
}

const EnhancedCard = ({
  children,
  className = "",
  hoverEffect = "lift",
  glowColor = "primary",
  delay = 0,
}: EnhancedCardProps) => {
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          y: -8,
          boxShadow:
            glowColor === "primary"
              ? "0 20px 60px rgba(102, 126, 234, 0.4)"
              : glowColor === "secondary"
                ? "0 20px 60px rgba(245, 87, 108, 0.4)"
                : "0 20px 60px rgba(16, 185, 129, 0.4)",
        };
      case "scale":
        return { scale: 1.03 };
      case "glow":
        return {
          boxShadow:
            glowColor === "primary"
              ? "0 0 40px rgba(102, 126, 234, 0.6)"
              : glowColor === "secondary"
                ? "0 0 40px rgba(245, 87, 108, 0.6)"
                : "0 0 40px rgba(16, 185, 129, 0.6)",
        };
      case "rotate":
        return { rotate: 2, scale: 1.02 };
      default:
        return { y: -8 };
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={getHoverAnimation()}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

export default EnhancedCard;
