"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div className={cn("w-full h-full", className)}>
      <SVG svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

const SVG = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  // 定義中心點
  const centerX = 720;
  const centerY = 450;

  // 輻射狀直線路徑
  const paths = [
    // M(move to center) L(line to x,y)
    `M${centerX} ${centerY} L1100 0`,
    `M${centerX} ${centerY} L2000 -10`,
    `M${centerX} ${centerY} L1600 100`,
    `M${centerX} ${centerY} L2000 450`,
    `M${centerX} ${centerY} L1300 600`,
    `M${centerX} ${centerY} L1800 1000`,
    `M${centerX} ${centerY} L1100 1000`,
    `M${centerX} ${centerY} L900 1500`,
    `M${centerX} ${centerY} L700 1400`,
    `M${centerX} ${centerY} L550 1350`,
    `M${centerX} ${centerY} L400 1250`,
    `M${centerX} ${centerY} L-300 1100`,
    `M${centerX} ${centerY} L-100 350`,
    `M${centerX} ${centerY} L-300 200`,
    `M${centerX} ${centerY} L-400 10`,
    `M${centerX} ${centerY} L550 0`,
    `M${centerX} ${centerY} L700 -100`,
    `M${centerX} ${centerY} L900 50`,
  ];
  const colors = [
    "#ffffff",
    "#70e8ef",
    "#ccccff",
    "#a0aaaf",
    "#90909f",
    "#e0e0e0",
    "#d0d0d0",
    "#c0c0c0",
    "#70d8ef",
    "#a0a0a0",
    "#007AC2",
    "#597BEB",
    "#3F39B5",
    "#dddddd",
    "#3636A6",
    "#3689D0",
    "#bbbbbb",
    "#CCDAA0",
  ];
  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
          key={`path-first-${idx}`}
        />
      ))}

      {/* duplicate for more paths */}
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
          key={`path-second-${idx}`}
        />
      ))}
    </motion.svg>
  );
};
