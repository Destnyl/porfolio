import { motion } from "framer-motion";
import { ReactElement } from "react";

interface CardContent {
  children?: ReactElement;
  className?: string;
}

const Card = (props: CardContent) => {
  return (
    <motion.div
      className={`group relative bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-dark-700/50 transition-all duration-300 hover:shadow-glow hover:border-primary-500/30 ${
        props.className || ""
      }`}
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        {props.children}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default Card;
