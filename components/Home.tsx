import { motion } from "framer-motion";
import Experience from "./Experience";
import Highlight from "./Highlight";
import Intro from "./Introduction";
import Project from "./Project";
import Skills from "./Skill";
import PageTransition from "./PageTransition";
import ScrollAnimation from "./ScrollAnimation";

const Home = () => {
  return (
    <PageTransition>
      <motion.div
        className="relative space-y-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <ScrollAnimation animationType="fadeIn">
          <section id="home">
            <Intro />
          </section>
        </ScrollAnimation>

        {/* Skills Section */}
        <ScrollAnimation animationType="slideUp" delay={0.2}>
          <section id="skills" className="relative">
            <Skills />
          </section>
        </ScrollAnimation>

        {/* Projects Section */}
        <ScrollAnimation animationType="slideUp" delay={0.3}>
          <section id="projects" className="relative">
            <Project />
          </section>
        </ScrollAnimation>

        {/* Testimonials/Highlights Section */}
        <ScrollAnimation animationType="slideUp" delay={0.5}>
          <section id="testimonials" className="relative">
            <Highlight />
          </section>
        </ScrollAnimation>
      </motion.div>
    </PageTransition>
  );
};

export default Home;
