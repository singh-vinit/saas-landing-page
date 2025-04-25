"use client";

import { motion } from "motion/react";

export default function FeatureCard2() {
  return (
    <motion.div
      className="max-w-[20rem] bg-white/10 rounded-2xl px-4 py-8 border border-white/20"
      initial={{ filter: "blur(10px)", y: 14 }}
      whileInView={{ filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.6 }}
      viewport={{ amount: 0.6 }}
    >
      <div className="flex justify-evenly items-center my-12 group">
        <span className="bg-white/70 px-5 py-2 text-black rounded-xl text-2xl font-medium">
          shift
        </span>
        <span className="bg-white/70 px-5 py-2 text-black rounded-xl text-2xl font-medium">
          alt
        </span>
        <span className="bg-white/70 px-5 py-2 text-black rounded-xl text-2xl font-medium">
          c
        </span>
      </div>
      <div className="text-2xl font-medium text-white text-left mb-2">
        <p>Keyboard</p>
        <p>Actions</p>
      </div>
      <p className="text-[1rem] text-white/50 capitalize">
        Powerful commands to help you create designs more quickly
      </p>
    </motion.div>
  );
}
