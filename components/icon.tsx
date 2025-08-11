import { motion } from "framer-motion";
import Image from "next/image";

const Icon = (props: any) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-2xl group-hover:border-primary-500/30 transition-all duration-300">
        <Image
          src={props.url}
          width={32}
          height={32}
          alt="Technology icon"
          className="transition-transform group-hover:scale-110"
        />
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default Icon;
