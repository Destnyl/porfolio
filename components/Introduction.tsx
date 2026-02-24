import { motion } from "framer-motion";
import Image from "next/image";
import ContentTitle from "../components/ContentTitle";
import ContentDetails from "../components/ContentDetails";
import ImageViewer from "./ImageViewer";
import { useImageViewer } from "../hooks/useImageViewer";

const Intro = () => {
  const { isOpen, currentImage, openImageViewer, closeImageViewer } =
    useImageViewer();

  const handleClick = () => {
    window.open("https://www.linkedin.com/in/andrea-destajo-828317139/");
  };

  const handleImageClick = () => {
    openImageViewer(
      "/feedback/profile2.png",
      "Andrea Destajo - Professional Profile"
    );
  };

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ContentTitle title="Who I am?" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <ContentDetails
                preLabel="Hello, I'm "
                title="Andrea Destajo,"
                description="Hard working professional with almost 5 years of experience in providing comprehensive technical support and developing HR Process systems. Skilled in designing and implementing efficient workflows for employee management. Previously worked on e-commerce projects, bringing a versatile approach to both customer-facing and internal business applications."
                btnLabel="Contact Me"
                fn={handleClick}
                fontSize="text-lg"
                hasAnimation
              />
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main image container */}
              <div
                className="relative w-80 h-96 rounded-3xl overflow-hidden cursor-pointer group"
                onClick={handleImageClick}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 backdrop-blur-sm"></div>
                <Image
                  src="/feedback/profile2.png"
                  alt="Andrea Destajo"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-80 blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full opacity-60 blur-sm"></div>

              {/* Floating cards */}
              <motion.div
                className="absolute -left-8 top-1/4 bg-dark-800/80 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-sm font-semibold text-primary-400">
                  Frontend
                </div>
                <div className="text-xs text-gray-400">Vue & Nuxtjs</div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 bg-dark-800/80 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-sm font-semibold text-secondary-400">
                  Backend
                </div>
                <div className="text-xs text-gray-400">Node.js & APIs</div>
              </motion.div>

              <motion.div
                className="absolute right-12 top-10 bg-dark-800/80 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
              >
                <div className="text-sm font-semibold text-emerald-400">
                  API Integration
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        isOpen={isOpen}
        imageSrc={currentImage.src}
        imageAlt={currentImage.alt}
        onClose={closeImageViewer}
      />
    </div>
  );
};

export default Intro;
