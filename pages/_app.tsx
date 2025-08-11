import "../styles/globals.css";
import type { AppProps } from "next/app";
import DefaultLayout from "../components/layout/Default";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <DefaultLayout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </DefaultLayout>
  );
}
