import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

enum ButtonTypes {
  "button",
  "submit",
  "reset",
  undefined,
}

interface BtnLabel {
  label: String;
  fn: MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  label = "label",
  fn,
  variant = "primary",
  size = "md",
}: BtnLabel) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full overflow-hidden group";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-500 hover:to-secondary-500 shadow-lg hover:shadow-glow",
    secondary:
      "bg-gradient-to-r from-secondary-600 to-primary-600 text-white hover:from-secondary-500 hover:to-primary-500 shadow-lg hover:shadow-glow",
    outline:
      "border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white",
  };

  return (
    <motion.button
      onClick={fn}
      type="button"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

      {/* Button text */}
      <span className="relative z-10 uppercase tracking-wide">{label}</span>
    </motion.button>
  );
};

export default Button;
