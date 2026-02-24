import { motion } from "framer-motion";
import Image from "next/image";
import EnhancedCard from "./EnhancedCard";
import ContentTitle from "../components/ContentTitle";
import ContentDetails from "../components/ContentDetails";
import { Fragment } from "react";
import { SKILLS } from "../constants";
import ScrollAnimation, {
  ScrollStagger,
  ScrollStaggerItem,
} from "./ScrollAnimation";

const Skills = () => {
  const handleClick = (url: any) => {
    window.open("/file/resume.pdf", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <ScrollAnimation animationType="fadeIn">
      <div className="py-24 px-6 sm:px-8 relative">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Skills Grid */}
            <ScrollStagger className="order-2 lg:order-1" staggerDelay={0.1}>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {SKILLS.map((skill, index) => (
                  <ScrollStaggerItem key={skill.title}>
                    <EnhancedCard
                      hoverEffect="lift"
                      glowColor={
                        index % 3 === 0
                          ? "primary"
                          : index % 3 === 1
                            ? "secondary"
                            : "emerald"
                      }
                      delay={index * 0.1}
                      className="h-full p-8 group cursor-pointer"
                    >
                      <Fragment>
                        <motion.div
                          className="relative mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <motion.div
                            className="relative w-16 h-16 mx-auto"
                            whileHover={{ y: -5 }}
                          >
                            <Image
                              src={skill.logo}
                              width={64}
                              height={64}
                              alt={`${skill.title} logo`}
                              className="w-full h-full object-contain filter drop-shadow-lg"
                            />

                            {/* Animated glow */}
                            <motion.div
                              className={`absolute inset-0 rounded-full blur-lg -z-10 ${
                                index % 3 === 0
                                  ? "bg-primary-500/30"
                                  : index % 3 === 1
                                    ? "bg-secondary-500/30"
                                    : "bg-emerald-500/30"
                              }`}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.15,
                              }}
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          className="space-y-4 text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 + index * 0.08 }}
                        >
                          <h3 className="text-xl font-semibold font-space text-white group-hover:text-primary-300 transition-colors duration-300">
                            {skill.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed font-inter group-hover:text-gray-300 transition-colors duration-300">
                            {skill.description}
                          </p>
                        </motion.div>

                        {/* Enhanced progress bar */}
                        <div className="w-full bg-gray-800 rounded-full h-3 mt-6 overflow-hidden">
                          <motion.div
                            className={`h-3 rounded-full relative ${
                              index % 3 === 0
                                ? "bg-gradient-to-r from-primary-500 to-primary-400"
                                : index % 3 === 1
                                  ? "bg-gradient-to-r from-secondary-500 to-secondary-400"
                                  : "bg-gradient-to-r from-emerald-500 to-emerald-400"
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "92%" }}
                            transition={{
                              duration: 1,
                              delay: index * 0.15 + 0.5,
                            }}
                            viewport={{ once: true }}
                          >
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                delay: index * 0.2 + 1,
                              }}
                            />
                          </motion.div>
                        </div>

                        {/* Skill percentage */}
                        <motion.div
                          className="text-right text-xs text-gray-500 mt-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + 1.5 }}
                        >
                          92%
                        </motion.div>
                      </Fragment>
                    </EnhancedCard>
                  </ScrollStaggerItem>
                ))}
              </motion.div>
            </ScrollStagger>

            {/* Enhanced Content Section */}
            <ScrollAnimation
              animationType="slideLeft"
              className="order-1 lg:order-2 space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ContentTitle title="Skills" />
              </motion.div>

              <ContentDetails
                title="Why Hire Me For Your Next Project?"
                description="As a Software Engineer, I ensure every task is accomplished within the given timeframe. I collaborate effectively with team members to clarify requirements and visualize the desired outcomes. With almost 5 years of development experience, I can immediately contribute to your software development goals."
                btnLabel="Download CV"
                fontSize="text-lg"
                fn={handleClick}
              />

              {/* Enhanced info cards */}
              <ScrollStagger
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
                staggerDelay={0.2}
              >
                <ScrollStaggerItem>
                  <motion.div
                    className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 backdrop-blur-md border border-primary-500/20 rounded-2xl p-6 group cursor-pointer overflow-hidden relative"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-primary-400 mb-2">
                        Frontend
                      </div>
                      <div className="text-sm text-gray-300">
                        React, Nuxt.js, Vue.js, TypeScript, tailwindcss
                      </div>
                    </div>
                  </motion.div>
                </ScrollStaggerItem>

                <ScrollStaggerItem>
                  <motion.div
                    className="bg-gradient-to-br from-secondary-500/10 to-secondary-600/5 backdrop-blur-md border border-secondary-500/20 rounded-2xl p-6 group cursor-pointer overflow-hidden relative"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 40px rgba(245, 87, 108, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-secondary-400 mb-2">
                        Backend
                      </div>
                      <div className="text-sm text-gray-300">
                        Node.js, APIs, Databases
                      </div>
                    </div>
                  </motion.div>
                </ScrollStaggerItem>
              </ScrollStagger>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Skills;
