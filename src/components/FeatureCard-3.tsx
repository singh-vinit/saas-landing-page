"use client";
import { motion } from "motion/react";

export default function FeatureCard3() {
  return (
    <motion.div
      className="max-w-[20rem] bg-white/10 rounded-2xl px-4 py-8 border border-white/20"
      initial={{ filter: "blur(10px)", y: 14 }}
      whileInView={{ filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.6 }}
      viewport={{ amount: 0.6 }}
    >
      <div className="text-center text-3xl font-extrabold text-white/20 p-14">
        <p>coming soon...</p>
      </div>
      <div className="text-2xl font-medium text-white text-left mb-2">
        <p>Real-time</p>
        <p>Collaboration</p>
      </div>
      <p className="text-[1rem] text-white/50 capitalize">
        Work together seamlessly with conflict free team editing.
      </p>
    </motion.div>
  );
}
