import { motion } from "framer-motion";
import Button from "./base/button";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import { TypeAnimation } from "react-type-animation";

interface Details {
  preLabel?: string;
  title: string;
  description: string;
  btnLabel: string;
  fontSize: string;
  hasAnimation?: boolean;
  fn: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Details = ({
  hasAnimation,
  preLabel,
  title,
  description,
  btnLabel,
  fontSize,
  fn,
}: Details) => {
  return (
    <div className="flex flex-col gap-y-8">
      <motion.section
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {preLabel && (
          <p className="text-lg text-gray-300 font-inter">{preLabel}</p>
        )}

        {hasAnimation ? (
          <div className="text-4xl md:text-6xl font-bold font-space leading-tight">
            <TypeAnimation
              sequence={[
                `${title}`,
                2000,
                "Web Developer",
                2000,
                "Frontend Specialist",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400"
            />
          </div>
        ) : (
          <h1 className="text-4xl md:text-6xl font-bold font-space leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
            {title}
          </h1>
        )}
      </motion.section>

      <motion.section
        className={`${fontSize} text-gray-300 leading-relaxed font-inter max-w-2xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {description}
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button label={btnLabel} fn={fn} />
      </motion.div>
    </div>
  );
};

export default Details;
