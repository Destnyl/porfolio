import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
import ContentTitle from "../components/ContentTitle";
import ContentDetails from "../components/ContentDetails";
import { Fragment } from "react";
import { SKILLS } from "../constants";

const Skills = () => {
  const handleClick = (url: any) => {
    window.open("/file/resume.pdf", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Skills Grid */}
          <motion.section
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {SKILLS.map((skill, index) => (
                <motion.div key={skill.title} variants={itemVariants}>
                  <Card className="h-full">
                    <Fragment>
                      <div className="relative">
                        <Image
                          src={skill.logo}
                          width={60}
                          height={60}
                          alt={`${skill.title} logo`}
                          className="mx-auto"
                        />
                        <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-md -z-10"></div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold font-space text-white">
                          {skill.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-inter">
                          {skill.description}
                        </p>
                      </div>

                      {/* Progress bar or skill level indicator */}
                      <div className="w-full bg-dark-700 rounded-full h-2 mt-4">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        ></motion.div>
                      </div>
                    </Fragment>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Content Section */}
          <motion.section
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContentTitle title="Skills" />

            <ContentDetails
              title="Why Hire Me For Your Next Project?"
              description="As a Software Engineer, I ensure every task is accomplished within the given timeframe. I collaborate effectively with team members to clarify requirements and visualize the desired outcomes. With almost 3 years of development experience, I can immediately contribute to your software development goals."
              btnLabel="Download CV"
              fontSize="text-lg"
              fn={handleClick}
            />

            {/* Additional info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div
                className="bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl font-bold text-primary-400">
                  Frontend
                </div>
                <div className="text-sm text-gray-400">
                  React, Next.js, Vue.js
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl font-bold text-secondary-400">
                  Backend
                </div>
                <div className="text-sm text-gray-400">
                  Node.js, APIs, Databases
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
