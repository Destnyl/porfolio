import { motion } from "framer-motion";
import ContentTitle from "./ContentTitle";
import Slider from "./Library/Slider";

const Highlight = () => {
  return (
    <div className="py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContentTitle title="Testimonials" />
          <h2 className="text-3xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mt-3">
            What People Say
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm">
            Here&apos;s what my colleagues and clients have to say about working
            with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Slider deviceType={undefined} />
        </motion.div>
      </div>
    </div>
  );
};

export default Highlight;
