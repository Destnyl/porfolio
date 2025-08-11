import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface ImageViewerProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ImageViewer = ({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
}: ImageViewerProps) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-5xl max-h-[90vh] p-4"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute -top-2 -right-2 z-10 w-10 h-10 bg-dark-800/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-dark-700/80 transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close image viewer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Image Container */}
            <div className="relative bg-dark-800/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">{imageAlt}</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Click anywhere outside to close
                </p>
              </div>
            </div>

            {/* Navigation Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-dark-800/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
                Press{" "}
                <kbd className="bg-white/10 px-2 py-1 rounded text-xs">ESC</kbd>{" "}
                to close
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageViewer;
