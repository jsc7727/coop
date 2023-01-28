import { css } from "@emotion/react";
import { motion } from "framer-motion";

const LetterLineLeftE = () => {
  return (
    <motion.g
      css={css`
        position: relative;
      `}
    >
      <motion.svg
        width="397"
        height="156"
        viewBox="0 0 397 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        css={css`
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
        `}
        animate={{
          translateX: ["10px", "12px", "10px"],
          rotate: ["30deg", "40deg", "30deg"],
        }}
        transition={{
          delay: 0,
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        style={{
          originX: "272px",
          originY: "60px",
          originZ: "0px",
        }}
      >
        <motion.line
          x1="269.5"
          y1="60.5"
          x2="315.5"
          y2="60.5"
          // stroke="black"
          stroke-width="9"
          stroke-linecap="round"
        />
        <motion.line
          x1="269.5"
          y1="62.5"
          x2="269.5"
          y2="125.5"
          // stroke="black"
          stroke-width="9"
          stroke-linecap="round"
        />
        <motion.line
          x1="269.5"
          y1="125.5"
          x2="315.5"
          y2="125.5"
          // stroke="black"
          stroke-width="9"
          stroke-linecap="round"
        />
        <motion.line
          x1="269.5"
          y1="94.5"
          x2="315.5"
          y2="94.5"
          // stroke="black"
          stroke-width="9"
          stroke-linecap="round"
        />
        <motion.line
          x1="315.5"
          y1="62.5"
          x2="315.5"
          y2="94.5"
          // stroke="black"
          stroke-width="9"
          stroke-linecap="round"
        />
        <motion.g
          animate={{
            translateX: ["-3px", "0px", "3px", "0px", "-3px"],
            translateY: ["-2px", "0px", "-2px", "0px", "-2px"],
          }}
          transition={{
            delay: 0,
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        >
          <motion.line
            x1="302.997"
            y1="82.16"
            x2="302.997"
            y2="76.16"
            // stroke="black"
            stroke-width="6"
            stroke-linecap="square"
          />
          <motion.line
            x1="283.997"
            y1="82.16"
            x2="283.997"
            y2="76.16"
            // stroke="black"
            stroke-width="6"
            stroke-linecap="square"
          />
        </motion.g>
      </motion.svg>

      <motion.svg
        width="397"
        height="156"
        viewBox="0 0 397 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        css={css`
          z-index: 1000;
          position: absolute;
          top: 0;
          left: 0;
        `}
        animate={{
          translateX: ["10px", "12px", "10px"],
          rotate: ["30deg", "40deg", "30deg"],
        }}
        transition={{
          delay: 0,
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        style={{
          originX: "272px",
          originY: "60px",
          originZ: "0px",
        }}
      >
        {/* 연필 겹치는 부분*/}
        <motion.line
          x1="265"
          y1="78"
          x2="274"
          y2="78"
          // stroke="black"
          stroke-width="30"
        />
      </motion.svg>
    </motion.g>
  );
};

export default LetterLineLeftE;
