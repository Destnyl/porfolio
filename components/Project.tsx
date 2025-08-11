import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";
import ContentDetails from "../components/ContentDetails";
import ContentTitle from "../components/ContentTitle";
import Icon from "./icon";
import { PROJECTS } from "../constants";

const Project = () => {
  const handleClick = (url: any) => {
    window.open(url);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContentTitle title="Featured Projects" />
          <h2 className="text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mt-4">
            My Recent Work
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently. Each
            project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              {/* Content Section */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <ContentTitle title="Project" />

                <ContentDetails
                  title={project.name}
                  description={project.description}
                  btnLabel="View Project"
                  fn={() => handleClick(project.link)}
                  fontSize="text-lg"
                />

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {project?.built?.map((iconUrl, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-xl"
                      >
                        <Icon url={iconUrl} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Stats or Features */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-dark-800/30 rounded-xl">
                    <div className="text-2xl font-bold text-primary-400">
                      100%
                    </div>
                    <div className="text-xs text-gray-400">Responsive</div>
                  </div>
                  <div className="text-center p-4 bg-dark-800/30 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-400">
                      Fast
                    </div>
                    <div className="text-xs text-gray-400">Performance</div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <motion.div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative group">
                  {/* Background decorations */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                  {/* Main image container */}
                  <div className="relative bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      width={600}
                      height={400}
                      alt={`${project.name} project screenshot`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Hover content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        onClick={() => handleClick(project.link)}
                        className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Live Demo
                      </motion.button>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full opacity-60"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
