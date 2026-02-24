import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

const AnimatedLogo = ({ size = 48, className = "" }: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: isHovered ? Infinity : 0,
        }}
        style={{
          background:
            "conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea)",
          filter: "blur(4px)",
          padding: "2px",
        }}
      />

      {/* Inner rotating ring */}
      <motion.div
        className="absolute inset-1 rounded-full border-2 border-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.3), transparent 70%)",
        }}
      />

      {/* Main logo container */}
      <motion.div
        className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center overflow-hidden"
        whileHover={{ boxShadow: "0 0 30px rgba(102, 126, 234, 0.4)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? [
                  "linear-gradient(0deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))",
                  "linear-gradient(90deg, rgba(118,75,162,0.1), rgba(240,147,251,0.1))",
                  "linear-gradient(180deg, rgba(240,147,251,0.1), rgba(245,87,108,0.1))",
                  "linear-gradient(270deg, rgba(245,87,108,0.1), rgba(102,126,234,0.1))",
                ]
              : "linear-gradient(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05))",
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Letter A */}
        <motion.div
          className="relative z-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-300 to-secondary-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 20px rgba(102, 126, 234, 0.6)",
          }}
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          A
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary-400"
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          scale: isHovered ? [1, 1.5, 2] : 1,
          opacity: isHovered ? [0.5, 0.2, 0] : 0,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
