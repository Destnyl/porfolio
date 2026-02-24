import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "About", href: "/about", current: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0.1, 0.3]);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      style={{
        backgroundColor: `rgba(12, 12, 12, ${scrolled ? 0.95 : 0.8})`,
        borderBottom: `1px solid rgba(255, 255, 255, ${scrolled ? 0.3 : 0.1})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link href="/" className="flex items-center gap-4">
              <AnimatedLogo size={scrolled ? 44 : 48} />
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <motion.h1
                  className="text-2xl font-space font-bold bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent drop-shadow-sm"
                  whileHover={{
                    scale: 1.05,
                    filter: "drop-shadow(0 0 8px rgba(102, 126, 234, 0.5))",
                  }}
                >
                  Andrea Destajo
                </motion.h1>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ height: "3px" }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.06 + 0.2 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <Link
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                  href={item.href}
                >
                  <span className="relative z-10 font-inter font-medium text-base">
                    {item.name}
                  </span>

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-lg opacity-0 group-hover:opacity-100"
                    layoutId="navbar-bg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400"
                    initial={{ width: 0, x: "-50%" }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary-400/10 rounded-lg blur-md opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/andrea-destajo-828317139/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden"
              >
                <motion.button
                  className="relative px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium text-base transition-all duration-300 group"
                  whileHover={{
                    boxShadow: "0 8px 32px rgba(102, 126, 234, 0.4)",
                    y: -2,
                  }}
                >
                  <span className="relative z-10">Let&apos;s Talk</span>

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
