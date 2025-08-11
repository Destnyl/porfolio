import { motion } from "framer-motion";
import Head from "next/head";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <>
      <Head>
        <title>About - Andrea Destajo</title>
        <meta
          name="description"
          content="Learn more about Andrea Lyn Destajo"
        />
      </Head>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 text-center"
            variants={itemVariants}
          >
            About Me
          </motion.h1>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Hello, I&apos;m Andrea
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I&apos;m a passionate developer and designer with a love for
              creating beautiful,
              <br className="hidden sm:block" /> functional digital experiences.
              My journey in technology began with curiosity
              <br className="hidden sm:block" /> and has evolved into a
              dedicated pursuit of innovative solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies,
              <br className="hidden sm:block" /> contributing to open-source
              projects, or enjoying the great outdoors.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Interests
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Web Development</li>
                <li>• UI/UX Design</li>
                <li>• Open Source</li>
                <li>• Photography</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
