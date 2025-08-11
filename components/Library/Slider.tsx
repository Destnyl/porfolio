import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Card from "../Card";
import { Fragment } from "react";
import { RECOMMENDATIONS } from "../../constants";

const Slider = (props: { deviceType: string | undefined }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
          padding: 20px 0;
        }
        .react-multi-carousel-item {
          padding: 0 15px;
        }
        .react-multiple-carousel__arrow {
          background: rgba(102, 126, 234, 0.8) !important;
          border: none !important;
          border-radius: 50% !important;
          width: 50px !important;
          height: 50px !important;
          min-width: 50px !important;
          min-height: 50px !important;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease !important;
        }
        .react-multiple-carousel__arrow:hover {
          background: rgba(102, 126, 234, 1) !important;
          transform: scale(1.1);
        }
        .react-multiple-carousel__arrow::before {
          font-size: 18px !important;
          color: white !important;
        }
        .custom-dot-list-style {
          margin-top: 30px !important;
        }
        .react-multi-carousel-dot button {
          background: rgba(255, 255, 255, 0.3) !important;
          border: none !important;
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          margin: 0 4px !important;
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
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {RECOMMENDATIONS.map((recommendation, index) => (
          <motion.div
            key={recommendation.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <Fragment>
                {/* Quote icon */}
                <div className="text-4xl text-primary-400 mb-4">&ldquo;</div>

                {/* Profile image with modern styling */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto relative">
                    <Image
                      className="rounded-full object-cover"
                      src={recommendation.photo}
                      width={80}
                      height={80}
                      alt={`${recommendation.name} profile`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full"></div>
                  </div>

                  {/* Online indicator */}
                  <div className="absolute bottom-1 right-1/2 transform translate-x-6 w-4 h-4 bg-green-400 rounded-full border-2 border-dark-800"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-semibold font-space text-white">
                    {recommendation.name}
                  </h3>

                  <div className="text-primary-400 text-sm font-medium">
                    {recommendation.work}
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm font-inter italic">
                    &ldquo;{recommendation.recommendation}&rdquo;
                  </p>

                  {/* Star rating */}
                  <div className="flex justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </Fragment>
            </Card>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
