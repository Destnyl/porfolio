import styles from "../styles/Home.module.css";
import HomePage from "../components/Home";
import Head from "next/head";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrea Destajo - Frontend Developer & Software Engineer</title>
        <meta
          name="description"
          content="Andrea Destajo - Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences."
        />
        <meta
          name="keywords"
          content="Andrea Destajo, Frontend Developer, React Developer, Next.js, Web Developer, Software Engineer, JavaScript, TypeScript"
        />
        <meta name="author" content="Andrea Destajo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://andreadestajo.com/" />
        <meta
          property="og:title"
          content="Andrea Destajo - Frontend Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Experienced Frontend Developer specializing in React, Next.js, and modern web technologies."
        />
        <meta property="og:image" content="/feedback/profile2.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://andreadestajo.com/" />
        <meta
          property="twitter:title"
          content="Andrea Destajo - Frontend Developer & Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Experienced Frontend Developer specializing in React, Next.js, and modern web technologies."
        />
        <meta property="twitter:image" content="/feedback/profile2.png" />

        <link rel="icon" href="/Logo.svg" />
        <link rel="canonical" href="https://andreadestajo.com/" />
      </Head>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HomePage />
      </motion.div>
    </>
  );
}
