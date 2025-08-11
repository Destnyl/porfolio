import PageNotFound from "../components/NotFound";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const NotFound = () => {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <PageNotFound />
    </motion.div>
  );
};

export default NotFound;
