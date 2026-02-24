import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ContentTitle from "../components/ContentTitle";
import ContentDetails from "../components/ContentDetails";
import ImageViewer from "./ImageViewer";
import { useImageViewer } from "../hooks/useImageViewer";
import { StaggerContainer, StaggerItem } from "./PageTransition";

const Intro = () => {
  const { isOpen, currentImage, openImageViewer, closeImageViewer } =
    useImageViewer();

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  const handleClick = () => {
    window.open("https://www.linkedin.com/in/andrea-destajo-828317139/");
  };

  const handleImageClick = () => {
    openImageViewer(
      "/feedback/profile2.png",
      "Andrea Destajo - Professional Profile",
    );
  };

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          style={{ y: y2 }}
        />

        {/* Additional floating orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Enhanced Content Section */}
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ContentTitle title="Who I am?" />
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <ContentDetails
                preLabel="Hello, I'm "
                title="Andrea Destajo,"
                description="Hard working professional with almost 5 years of experience in providing comprehensive technical support and developing HR Process systems. Skilled in designing and implementing efficient workflows for employee management. Previously worked on e-commerce projects, bringing a versatile approach to both customer-facing and internal business applications."
                btnLabel="Contact Me"
                fn={handleClick}
                fontSize="text-lg"
                hasAnimation
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Enhanced Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Enhanced main image container */}
              <motion.div
                className="relative w-80 h-96 rounded-3xl overflow-hidden cursor-pointer group"
                onClick={handleImageClick}
                whileHover={{
                  scale: 1.05,
                  rotateZ: 1,
                  boxShadow: "0 25px 50px rgba(102, 126, 234, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 backdrop-blur-sm"
                  whileHover={{ opacity: 0.8 }}
                />
                <Image
                  src="/feedback/profile2.png"
                  alt="Andrea Destajo"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />

                {/* Enhanced hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  whileHover={{ backdropFilter: "blur(4px)" }}
                >
                  <motion.div
                    className="bg-white/20 backdrop-blur-md rounded-full p-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Enhanced decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-80 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full opacity-60 blur-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Enhanced floating cards */}
              <motion.div
                className="absolute -left-8 top-1/4 bg-dark-800/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, y: -20 }}
              >
                <div className="text-sm font-semibold text-primary-400">
                  Frontend
                </div>
                <div className="text-xs text-gray-400">Vue & Nuxtjs</div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 bg-dark-800/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, y: 20 }}
              >
                <div className="text-sm font-semibold text-secondary-400">
                  Backend
                </div>
                <div className="text-xs text-gray-400">Node.js & APIs</div>
              </motion.div>

              <motion.div
                className="absolute right-12 top-10 bg-dark-800/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl"
                animate={{
                  y: [0, 12, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, rotate: 3 }}
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
