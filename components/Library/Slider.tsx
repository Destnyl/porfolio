import { motion, AnimatePresence } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Card from "../Card";
import ImageViewer from "../ImageViewer";
import { useImageViewer } from "../../hooks/useImageViewer";
import { Fragment, useState } from "react";
import { RECOMMENDATIONS } from "../../constants";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  recommendations: any[];
}

const FeedbackModal = ({
  isOpen,
  onClose,
  recommendations,
}: FeedbackModalProps) => {
  const {
    isOpen: isImageOpen,
    currentImage,
    openImageViewer,
    closeImageViewer,
  } = useImageViewer();

  const handleImageClick = (imageSrc: any, personName: string) => {
    const imageUrl = typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    openImageViewer(imageUrl, `${personName} - Profile Photo`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-dark-800/90 backdrop-blur-xl border border-white/10 rounded-2xl max-w-6xl max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">
                All Feedback & Testimonials
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
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
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((recommendation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="h-full">
                      <div className="p-6">
                        {/* Profile Section */}
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-16 h-16 relative cursor-pointer group flex-shrink-0"
                            onClick={() =>
                              handleImageClick(
                                recommendation.photo,
                                recommendation.name
                              )
                            }
                          >
                            <Image
                              className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                              src={recommendation.photo}
                              width={64}
                              height={64}
                              alt={`${recommendation.name} profile`}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-white"
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
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-white truncate">
                              {recommendation.name || "Recognition"}
                            </h3>
                            <p className="text-primary-400 text-sm font-medium truncate">
                              {recommendation.work}
                            </p>
                          </div>
                        </div>

                        {/* Recommendation Text */}
                        <div className="relative">
                          <div className="text-2xl text-primary-400 mb-2">
                            &ldquo;
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed italic pl-4">
                            {recommendation.recommendation}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mt-4 pt-4 border-t border-white/10">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Viewer */}
          <ImageViewer
            isOpen={isImageOpen}
            imageSrc={currentImage.src}
            imageAlt={currentImage.alt}
            onClose={closeImageViewer}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Slider = (props: { deviceType: string | undefined }) => {
  const { isOpen, currentImage, openImageViewer, closeImageViewer } =
    useImageViewer();
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // Show only first 6 recommendations in the carousel
  const displayedRecommendations = RECOMMENDATIONS.slice(0, 6);

  const handleImageClick = (imageSrc: any, personName: string) => {
    const imageUrl = typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    openImageViewer(imageUrl, `${personName} - Profile Photo`);
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="testimonials-carousel">
      <style jsx global>{`
        .carousel-container {
          padding: 10px 0;
        }
        .react-multi-carousel-item {
          padding: 0 10px;
        }
        .react-multiple-carousel__arrow {
          background: rgba(102, 126, 234, 0.8) !important;
          border: none !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
          min-width: 40px !important;
          min-height: 40px !important;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease !important;
        }
        .react-multiple-carousel__arrow:hover {
          background: rgba(102, 126, 234, 1) !important;
          transform: scale(1.1);
        }
        .react-multiple-carousel__arrow::before {
          font-size: 16px !important;
          color: white !important;
        }
        .custom-dot-list-style {
          margin-top: 20px !important;
        }
        .react-multi-carousel-dot button {
          background: rgba(255, 255, 255, 0.3) !important;
          border: none !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          margin: 0 3px !important;
        }
        .react-multi-carousel-dot--active button {
          background: linear-gradient(
            135deg,
            #667eea 0%,
            #764ba2 100%
          ) !important;
        }
      `}</style>

      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {displayedRecommendations.map((recommendation, index) => (
          <motion.div
            key={recommendation.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="p-4">
                {/* Compact Profile Section */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 relative cursor-pointer group flex-shrink-0"
                    onClick={() =>
                      handleImageClick(
                        recommendation.photo,
                        recommendation.name
                      )
                    }
                  >
                    <Image
                      className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={recommendation.photo}
                      width={48}
                      height={48}
                      alt={`${recommendation.name} profile`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
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
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white truncate">
                      {recommendation.name || "Recognition"}
                    </h3>
                    <p className="text-primary-400 text-xs font-medium truncate">
                      {recommendation.work}
                    </p>
                  </div>
                </div>

                {/* Truncated Recommendation */}
                <div className="relative">
                  <div className="text-lg text-primary-400 mb-2">&ldquo;</div>
                  <p className="text-gray-300 text-xs leading-relaxed italic line-clamp-3">
                    {recommendation.recommendation.length > 120
                      ? `${recommendation.recommendation.substring(0, 120)}...`
                      : recommendation.recommendation}
                  </p>
                </div>

                {/* Mini Star Rating */}
                <div className="flex gap-1 mt-3 pt-2 border-t border-white/10">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </Carousel>

      {/* View All Feedback Button */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          onClick={() => setIsFeedbackModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <span>View All Feedback</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
            {RECOMMENDATIONS.length}
          </span>
        </button>
      </motion.div>

      {/* Image Viewer Modal */}
      <ImageViewer
        isOpen={isOpen}
        imageSrc={currentImage.src}
        imageAlt={currentImage.alt}
        onClose={closeImageViewer}
      />

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        recommendations={RECOMMENDATIONS}
      />
    </div>
  );
};

export default Slider;
