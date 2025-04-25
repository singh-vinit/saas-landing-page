"use client";

import { motion } from "motion/react";

export default function FeatureCard1() {
  return (
    <motion.div
      className="max-w-[20rem] bg-white/10 rounded-2xl px-4 py-8 border border-white/20"
      initial={{ filter: "blur(10px)", y: 14, }}
      whileInView={{ filter: "blur(0px)", y: 0 }}
      transition={{duration: 1, type: "spring", bounce: 0.6}}
      viewport={{amount: 0.6}}
    >
      <div className="text-center text-3xl font-extrabold text-white/20 mb-8">
        <p>we've achieved</p>
        <p className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
          incredible
        </p>
        <p>growth this year</p>
      </div>
      <div className="text-2xl font-medium text-white text-left mb-2">
        <p>Interactive</p>
        <p>Prototyping</p>
      </div>
      <p className="text-[1rem] text-white/50 capitalize">
        Engage your clients with prototypes that react to user actions.
      </p>
    </motion.div>
  );
}
