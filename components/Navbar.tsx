import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import imageURL from "../public/Logo.svg";

const navigation = [
  { name: "Home", href: "/", current: true },
  // { name: 'About', href: '/work', current: false },
  // { name: 'Contact', href: '/contact', current: false }
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <Image
                src={imageURL}
                width={32}
                height={32}
                alt="Andrea Destajo Logo"
                className="w-8 h-8"
              />
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-sm"></div>
            </div>
            <h1 className="text-xl font-space font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Andrea Destajo
            </h1>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                  href={item.href}
                >
                  <span className="relative z-10 font-inter font-medium">
                    {item.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
            >
              <a
                href="https://www.linkedin.com/in/andrea-destajo-828317139/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 hover:shadow-glow">
                  Let&apos;s Talk
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
