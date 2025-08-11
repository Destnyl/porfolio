import { motion } from "framer-motion";
import Image from "next/image";
import logoURL from "../public/Logo.svg";
import LinkedInLogo from "../public/LinkedIn.png";
import fbLogo from "../public/Facebook.png";
import whatsappLogo from "../public/Whatsapp.png";

function Footer() {
  const socialLinks = [
    {
      icon: fbLogo,
      url: "https://web.facebook.com/andrealyn.destajo",
      alt: "Facebook",
    },
    {
      icon: LinkedInLogo,
      url: "https://www.linkedin.com/in/andrea-destajo-828317139/",
      alt: "LinkedIn",
    },
    { icon: whatsappLogo, url: "tel:+639985338417", alt: "WhatsApp" },
  ];

  return (
    <motion.footer
      className="relative bg-dark-900/80 backdrop-blur-md border-t border-white/10 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-secondary-600/5"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Copyright */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={logoURL}
                  width={32}
                  height={32}
                  alt="Andrea Destajo Logo"
                />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-sm"></div>
              </div>
              <h3 className="text-lg font-space font-bold text-white">
                Andrea Destajo
              </h3>
            </div>
          </motion.div>

          {/* Copyright text centered */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-gray-400 text-sm">
              © 2023 Andrea Destajo. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-end gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.alt}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group relative p-3 bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-xl hover:border-primary-500/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
              >
                <Image
                  src={social.icon}
                  width={24}
                  height={24}
                  alt={social.alt}
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                />

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional footer content */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>Designed & Built by Andrea Destajo</p>
            <div className="flex gap-6">
              <a
                href="#about"
                className="hover:text-primary-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-primary-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-primary-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
