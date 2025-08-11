import { motion } from "framer-motion";
import Experience from "./Experience";
import Highlight from "./Highlight";
import Intro from "./Introduction";
import Project from "./Project";
import Skills from "./Skill";

const Home = () => {
  return (
    <motion.div
      className="relative space-y-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section id="home">
        <Intro />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative">
        <Project />
      </section>

      {/* Experience Section - Uncomment when ready */}
      {/* <section id="experience" className="relative">
                <Experience />
            </section> */}

      {/* Testimonials/Highlights Section */}
      <section id="testimonials" className="relative">
        <Highlight />
      </section>
    </motion.div>
  );
};

export default Home;
