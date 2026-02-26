import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useRef } from "react";
import PageTransition, {
  StaggerContainer,
  StaggerItem,
} from "../components/PageTransition";
import ScrollAnimation, {
  ScrollStagger,
  ScrollStaggerItem,
} from "../components/ScrollAnimation";
import EnhancedCard from "../components/EnhancedCard";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Nuxt.js",
    "Node.js",
    "MongoDB",
    "Git",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "knockout js",
    "NPM",
    "YARN",
    "REST APIs",
    "GitHub",
    "Jira",
    "Agile Methodologies",
    "VITE",
    "Quasar",
    "postman",
    "Figma",
    "Pinia Store"
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: " Sprout Solution",
      period: "2024 - 2026",
      description:
        "Frontend Developer specializing in Vue 3, Knockout.js, TypeScript/JavaScript, and Tailwind CSS, building scalable, high-performance web applications. Experienced in REST API integration, secure routing with role-based access, feature flags, and migration strategies, and contributing to shared design system component libraries using Vue, Vite, Playwright, and VitePress. Led migration of legacy Knockout.js applications to Vue 3, improving performance and maintainability. Skilled in API testing (Postman), Git-based version control, Node.js, NVM, and Yarn, with active participation in Agile practices. Leverage AI tools such as GitHub Copilot, Cursor, and Claude AI to enhance productivity and code quality.",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Knockout js", "VITE", "Postman", "GitHub Copilot", "Cursor", "Claude AI", "Node.js", "NVM", "Yarn", "Figma", "Pinia Store", "Playwright", "VitePress", "REST APIs", "Agile Methodologies"],
    },
    {
      title: "Frontend Developer",
      company: " UBx Philippines Corporation",
      period: "2021 - 2024",
      description:
        "Develops website and App for Marketplaces using Nuxt/Vue js",
      technologies: ["React", "Vue.js", "TypeScript", "Node.js", "Nuxt.js"],
    },
    {
      title: "Full Stack Developer",
      company: "Bitcapp",
      period: "2020 - 2021",
      description:
        " Designing and maintaining data systems and databases; this includes fixing coding errors and other data-related problems, Assists in the design, coding, and testing of technical solutions",
      technologies: ["JavaScript", "Vue", "Quasar", "MongoDB", "Node.js"],
    },
    {
      title: "Analyst",
      company: "Accenture",
      period: "2017 - 2020",
      description:
        "Analyzing and moderating contents to ensure the safety and privacy ofonline platforms.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Creating modern web applications",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Crafting beautiful user experiences",
    },
    {
      icon: "🚀",
      title: "Open Source",
      desc: "Contributing to community projects",
    },
    {
      icon: "📸",
      title: "Photography",
      desc: "Capturing moments and memories",
    },
    { icon: "🌍", title: "Travel", desc: "Exploring new cultures and places" },
    { icon: "📚", title: "Learning", desc: "Continuous skill development" },
  ];

  return (
    <>
      <Head>
        <title>About - Andrea Destajo</title>
        <meta
          name="description"
          content="Learn more about Andrea Destajo - Full Stack Developer with 5+ years of experience in creating innovative web solutions"
        />
      </Head>

      <PageTransition>
        <div
          ref={containerRef}
          className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
              style={{ y, opacity }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
            {/* Hero Section */}
            <ScrollAnimation
              animationType="fadeIn"
              className="text-center mb-20"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold font-space mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Passionate developer crafting innovative digital solutions with
                5+ years of experience in building scalable web applications and
                exceptional user experiences.
              </motion.p>
            </ScrollAnimation>

            {/* Main Bio Section */}
            <ScrollAnimation animationType="slideUp" className="mb-20">
              <EnhancedCard hoverEffect="lift" className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Profile Image */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative w-80 h-96 mx-auto rounded-3xl overflow-hidden">
                      <Image
                        src="/feedback/profile2.png"
                        alt="Andrea Destajo - About"
                        width={320}
                        height={384}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>

                  {/* Bio Content */}
                  <StaggerContainer className="space-y-6">
                    <StaggerItem>
                      <h2 className="text-3xl font-bold text-white mb-4 font-space">
                        Hello, I&apos;m Andrea
                      </h2>
                    </StaggerItem>

                    <StaggerItem>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        As a dedicated{" "}
                        <span className="text-primary-400 font-semibold">
                          Full Stack Developer
                        </span>
                        , I specialize in creating innovative web solutions that
                        blend cutting-edge technology with exceptional user
                        experience. My journey in software development spans
                        over
                        <span className="text-secondary-400 font-semibold">
                          {" "}
                          5 years
                        </span>
                        , during which I&apos;ve mastered both frontend and
                        backend technologies.
                      </p>
                    </StaggerItem>

                    <StaggerItem>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        I have extensive experience in{" "}
                        <span className="text-emerald-400 font-semibold">
                          HR Process Systems
                        </span>{" "}
                        and e-commerce development, bringing a unique
                        perspective to business applications. My approach
                        combines technical expertise with strong collaboration
                        skills to deliver projects that exceed expectations.
                      </p>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </EnhancedCard>
            </ScrollAnimation>

            {/* Skills Section */}
            <ScrollAnimation animationType="slideUp" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-space text-white mb-4">
                  Technical Skills
                </h2>
                <p className="text-lg text-gray-400">
                  Technologies and tools I work with
                </p>
              </div>

              <ScrollStagger
                className="flex flex-wrap justify-center gap-4 gap-y-6"
                staggerDelay={0.1}
              >
                {skills.map((skill, index) => (
                  <ScrollStaggerItem key={skill}>
                    <motion.span
                      className={`px-6 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
                        index % 3 === 0
                          ? "bg-primary-500/20 text-primary-300 border border-primary-500/30 hover:bg-primary-500/30"
                          : index % 3 === 1
                            ? "bg-secondary-500/20 text-secondary-300 border border-secondary-500/30 hover:bg-secondary-500/30"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow:
                          index % 3 === 0
                            ? "0 10px 30px rgba(102, 126, 234, 0.3)"
                            : index % 3 === 1
                              ? "0 10px 30px rgba(245, 87, 108, 0.3)"
                              : "0 10px 30px rgba(16, 185, 129, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  </ScrollStaggerItem>
                ))}
              </ScrollStagger>
            </ScrollAnimation>

            {/* Experience Timeline */}
            <ScrollAnimation animationType="slideUp" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-space text-white mb-4">
                  Professional Journey
                </h2>
                <p className="text-lg text-gray-400">
                  My career progression and key achievements
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
                <ScrollStagger className="space-y-12" staggerDelay={0.2}>
                  {experiences.map((exp, index) => (
                    <ScrollStaggerItem key={index}>
                      <div className="relative flex items-start gap-8">
                        {/* Timeline dot */}
                        <motion.div
                          className="relative z-10 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-6"
                          whileHover={{ scale: 1.5 }}
                          animate={{
                            boxShadow: [
                              "0 0 0 0 rgba(102, 126, 234, 0.7)",
                              "0 0 0 20px rgba(102, 126, 234, 0)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />

                        {/* Content card */}
                        <EnhancedCard
                          hoverEffect="lift"
                          glowColor={index % 2 === 0 ? "primary" : "secondary"}
                          className="flex-1 p-6"
                        >
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-primary-400 font-medium mb-3">
                                {exp.company}
                              </p>
                              <p className="text-gray-300 leading-relaxed mb-4">
                                {exp.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-secondary-400 font-medium text-sm whitespace-nowrap">
                              {exp.period}
                            </div>
                          </div>
                        </EnhancedCard>
                      </div>
                    </ScrollStaggerItem>
                  ))}
                </ScrollStagger>
              </div>
            </ScrollAnimation>

            {/* Interests Section */}
            <ScrollAnimation animationType="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-space text-white mb-4">
                  Beyond Coding
                </h2>
                <p className="text-lg text-gray-400">
                  What drives my passion and creativity
                </p>
              </div>

              <ScrollStagger
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                staggerDelay={0.1}
              >
                {interests.map((interest, index) => (
                  <ScrollStaggerItem key={interest.title}>
                    <EnhancedCard
                      hoverEffect="scale"
                      glowColor={
                        index % 3 === 0
                          ? "primary"
                          : index % 3 === 1
                            ? "secondary"
                            : "emerald"
                      }
                      className="p-6 text-center group cursor-pointer h-full"
                    >
                      <motion.div
                        className="text-4xl mb-4"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {interest.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {interest.title}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {interest.desc}
                      </p>
                    </EnhancedCard>
                  </ScrollStaggerItem>
                ))}
              </ScrollStagger>
            </ScrollAnimation>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default About;
