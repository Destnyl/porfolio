import { motion } from "framer-motion";

interface label {
  title: String;
}

const Section = (props: label) => {
  return (
    <motion.div
      className="flex items-center gap-4 mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-px bg-gradient-to-r from-primary-500 to-secondary-500 w-12"></div>
      <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 uppercase tracking-wider">
        {props.title}
      </div>
      <div className="h-px bg-gradient-to-r from-secondary-500 to-primary-500 w-12"></div>
    </motion.div>
  );
};

export default Section;
